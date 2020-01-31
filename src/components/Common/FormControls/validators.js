
export const required = values => {
    if (values) return undefined;
    return "Поле обязательно!!!"
};

export const email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Неправильный email' : undefined
};

export const capacity = maxValue => value => {
    return value > maxValue ? `Сумма не должна быть больше ${maxValue}` : undefined
};


//
// export const asyncValidateEmail = (values) => {
//     return authAPI.login(values.email).then((resolve) => {
//         if (resolve) {
//
//             // throw{ email: 'Такой e-mail уже зарегистрирован' };
//             // eslint-disable-next-line no-throw-literal
//             throw{ email: 'Такой e-mail уже зарегистрирован' };
//         }
//     });
// };
//
//
//




// export const addCategoriesValidate = () => (values) => {
//     const errors = {};
//     if(!values.name) {
//         errors.name = "Required";
//     }
//     if(!values.capacity) {
//         errors.capacity = "Required";
//     }
//
//     if(values.capacity) {
//         getBill.then(result => {
//             if (result.value < values.capacity) {
//                 errors.capacity = values.capacity - result.value;
//             }
//         });
//     }
//     return errors;
// };