import {currencyAPI} from "../../../api/api";

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

const asyncValidateCapacity = (values) => {
    return currencyAPI.getCurrency()
        .then(response => {
            let valNumber = +values.capacity;
            if (valNumber > response[0].value) {
                let diferent = valNumber - response[0].value;
                // eslint-disable-next-line no-throw-literal
                throw{capacity: `На счете недостаточно средств. Вам не хватает/ ${diferent} /`};
            }
        })

};


const asyncValidate = composeAsyncValidators([asyncValidateCapacity]);

export default asyncValidate;
