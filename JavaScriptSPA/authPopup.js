//criando uma instacia msal configurando os parametros do authconfig
const myMSALObj = new Msal.UserAgentApplication(msalConfig)

function signIn(){
    myMSALObj.loginPopup(loginRequest) //scopes
        .then(loginResponse => {
            if(myMSALObj.getAccount()){
                showWelcomeMessage(myMSALObj.getAccount())
            }
        }).catch(error => {
            console.log(error)
        })
}

function signOut() {
    myMSALObj.logout()
}

