import React from "react";
import classes from "classnames"
import "./renderField.scss";
import {Field} from "redux-form";
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const RenderInput = ({input, asyncValidate, meta, className, defaultValue,  ...props}) => {
    const hasErrorLimit = meta.error && meta.error.split('/').length > 1 && meta.error.split('/');
    const hasError = meta.touched && meta.error;


    return (
        <div className={classes("form-group", {"has-error": hasError})}>
            <input {...input} {...props} className="form-control" value={defaultValue}/>
            {/*underlined*/}
            <div>
                {
                    hasErrorLimit ?
                        <span className="test">{hasErrorLimit[0]} <b>{numberWithCommas(hasErrorLimit[1])} лей</b></span> :
                        hasError ? <span>{meta.error}</span> :
                            null
                }
            </div>
        </div>
    )
};

export const RenderCheckBox = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        // eslint-disable-next-line no-useless-concat
        <div className={"form-group" + " " + (hasError ? "has-error" : "")}>
            <label htmlFor="agree">
                <input  type="checkbox"{...input} {...props} className="checkbox"/>
                <span>Согласен с правилами</span>
            </label>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const RenderRadioButton = ({meta, input, className, options, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        // eslint-disable-next-line no-useless-concat
        <div className={"form-group" + " " + "radio-group" + " " + (hasError ? "has-error" : "")}>
            {
                options.map((itemBtn, idx) => (
                    <label key={idx}>
                        <Field className="radio" name="type" component="input" type="radio" value={itemBtn.value} />{' '}
                        <span className="radio_btn">{itemBtn.title}</span>
                    </label>
                ))
            }
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const RenderSelect = ({meta, children, input}) => {

    const hasError = meta.touched && meta.error;
    return (
        // eslint-disable-next-line no-useless-concat
        <div className={"form-group" + " " + (hasError ? "has-error" : "")}>
            <select className="form-control" onChange={input.onChange} value={input.name.name}>
                {
                    children.map((itemOption, index) => (
                        <option key={index}>{itemOption.props.value}</option>
                    ))
                }
            </select>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const TestRender = (props) => {
    return (
        <div className="form-group">
            <input {...props.input} {...props} className="form-control" />
        </div>
    )
};