import React from 'react';

const ErrorAuth = (props) => {
    return (
        <>
            {
                props.showErrorLogin && <div className="error_auth">Parola sau email gresit!!!</div>
            }
            {
                props.showErrorSingUp && <div className="error_auth">Asa email exista!!!</div>
            }
        </>
    );

};

export default ErrorAuth;