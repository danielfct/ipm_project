var logged = false;

function login(){
    logged = true;
}

function logout(){
    logged = false;
}

function isLogged(){
    if(logged)
        return true;
    return false;
}

export {login,logout,isLogged};