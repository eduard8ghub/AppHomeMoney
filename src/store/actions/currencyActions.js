import firebase from "../../firebase";
const db = firebase.firestore();


export const SET_CURRENCY = "SET_CURRENCY";

const setCurrency = (currency) => ({type: SET_CURRENCY, currency});

export const onGetCurrency = () => (dispatch) => {
    db.collection("categories").get().then((querySnapshot) => {
        let a = querySnapshot.docs.map(doc => doc.data());
        // console.log(a);
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            // console.log(`${doc.id} => ${doc.data()}`);
        });
    });
};