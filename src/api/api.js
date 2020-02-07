import axios from "axios";
import firebase from "./../firebase";

const db = firebase.firestore();

const updateBillValue = (value) => {
    return db.collection('bill')
        .doc("2NOCSBROlytlsHpQCrVD")
        .update({value: firebase.firestore.FieldValue.increment(value)})
};


export const currencyAPI = {
    getCurrency() {
        return db.collection("bill")
            .get()
            .then(querySnapshot => querySnapshot.docs.map(itemDoc => itemDoc.data()));
    }
};

export const eventsAPI = {
    getEvents() {
        return db.collection("events")
            .get()
            .then(querySnapshot => querySnapshot.docs.map(itemDoc => itemDoc.data()))
    },

    addNewEvent(newEvent) {
        return db.collection("events")
            .add({...newEvent})
            .then(docRef => {
                if (newEvent.type === "outcome") {
                     updateBillValue(-newEvent.amount)
                } else {
                     updateBillValue(newEvent.amount)
                }
                return db.collection("events")
                    .where(firebase.firestore.FieldPath.documentId(), '==', docRef.id)
                    .get()
                    .then(querySnapshot => querySnapshot.docs.map(itemDoc => itemDoc.data()))

            })
    }
};

export const categoriesAPI = {
    getCategories() {
        return db.collection("categories")
            .get()
            .then(querySnapshot => querySnapshot.docs.map(itemDoc => itemDoc));
        // .then(querySnapshot => querySnapshot.docs.map(itemDoc => itemDoc.data()))
    },

    addNewCategory(capacity, name) {
        return db.collection("categories")
            .add({capacity, name})
            .then(docRef => {
                return db.collection("categories")
                    .where(firebase.firestore.FieldPath.documentId(), '==', docRef.id)
                    .get()
                    .then(querySnapshot => querySnapshot.docs.map(itemDoc => {
                        return {
                            category: itemDoc.data(),
                            id: docRef.id
                        };
                    }));
            });
    },

    updateCategory(editCategory) {
        return db.collection('categories')
            .doc(editCategory.id)
            .update({capacity: editCategory.capacity, name: editCategory.name})
            .then(() => {
                return (
                    db.collection("categories")
                        .where(firebase.firestore.FieldPath.documentId(), '==', editCategory.id)
                        .get()
                        .then(querySnapshot => querySnapshot.docs.map(itemDoc => itemDoc.data()))
                )
            })
    },
    deleteCategory(idCategory) {
        return db.collection('categories')
            .doc(idCategory)
            .delete()
            .then()
    }

};

export const authAPI = {
    signUp(value) {
        const authData = {
            email: value.email,
            password: value.password,
            returnSecureToken: true
        };
        return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBG1qYgl8cFGmqUubIZVy2kRtaC1o_lWNU", authData)
            .then(response => response.data)
    },

    login(value) {
        const authData = {
            email: value.email,
            password: value.password,
            returnSecureToken: true
        };
        return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG1qYgl8cFGmqUubIZVy2kRtaC1o_lWNU", authData)
    },
};