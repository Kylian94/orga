const URI = 'http://api-orga.kp-dev.fr';

export default {
    requestLogin(email, password) {
        return function (dispatch) {
            dispatch(Actions.loading(true));
            return loginService(email, password)
                .then(response => {

                    // On sauvegarde du token dans le local storage 
                    dispatch(Actions.login(response.user.email, response.authorization));
                })
                .catch(err => {
                    dispatch(Actions.loading(false));
                    throw err;
                });
        };
    }
}