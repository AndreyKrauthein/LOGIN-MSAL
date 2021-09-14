//configurando o msal
const msalConfig = {
    auth: {
        clientId: "",
        authority: "",
        redirectUri: "",
    },
    cache: {
      cacheLocation: "",
      storeAuthStateInCookie: false, 
    }
}

const loginRequest = {
    scopes: [""]
}
