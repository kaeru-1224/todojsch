
const loginInput= document.querySelector("#Login-form input");
const loginForm = document.querySelector("#Login-form");
const greeting= document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const usernameKey ="username";

function LoginButtonSubmit(event){ 

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(usernameKey,username)
    paontGreeting(username)

}

function paontGreeting(username){  
    greeting.innerText= `Hello  ${username}😀`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName= localStorage.getItem(usernameKey)

if(saveUserName===null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",LoginButtonSubmit);

}else{paontGreeting(saveUserName)

}