document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting"); 
    const USERNAME_KEY = "username";

    function onLoginSubmit(event){
        event.preventDefault(); 
        console.log("Form submitted");
        loginForm.style.display = 'none';
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    }

    function paintGreetings(username){
        console.log("Painting greeting for", username);
        greeting.innerText = `${username},\nEnjoy your season `;
        greeting.style.display = 'block';
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);
    console.log("Saved username:", savedUsername);
    if(savedUsername === null){
        //console.log("No saved username, showing login form");
        loginForm.style.display = 'block';
        greeting.style.display = 'none';
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        //console.log("Username found, hiding login form");
        loginForm.style.display = 'none';
        paintGreetings(savedUsername);
    }
});
