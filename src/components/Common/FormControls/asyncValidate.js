import {authAPI} from "../../../api/api";

function composeAsyncValidators(validatorFns) {
    return async (values, dispatch, props, field) => {
        let errors;
        for (const validatorFn of validatorFns) {
            try {
                await validatorFn(values, dispatch, props, field);
            } catch (err) {
                errors = Object.assign({}, errors, err);
            }
        }
        if (errors) throw errors;
    };
}


const asyncValidateEmail = (values) => {
    return authAPI.login(values)
        .then(response => {
            console.log(response);
            // if(data.data.error.message === "EMAIL_NOT_FOUND") {
            //     console.log(data.data);
            //     // throw{ email: 'Такой e-mail уже зарегистрирован' }
            // }
            // console.log(data.data.error.message);
        })
        .catch(error => {
            console.log(error.toJSON());
        })
};
// return new SubmissionError({ _error: 'whatever you want here' })
// const asyncValidateLimit = (values) => {
//     return currencyAPI.getMyBill().then((response) => {
//         if (+values.capacity > response.value) {
//             // eslint-disable-next-line no-throw-literal
//             throw{ capacity: `На счете недостаточно средств. Вам не хватает/ ${+values.capacity - response.value} /` };
//         }
//     });
// };


const asyncValidate = composeAsyncValidators([asyncValidateEmail]);

export default asyncValidate;
