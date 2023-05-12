


let darkMode = "enabled";
const darkModeToggle = document.querySelector('#dark-mode-toggle');


darkModeToggle.addEventListener("click", () => {

    console.log("addEventListener status:", darkMode);
    
    if(darkMode == 'enabled'){
        console.log("current status : darkMode == 'enabled'");
        enableDayMode();
        darkMode = 'disabled';
    }

    else{
        console.log("current status : darkMode == 'disabled'")
        enableDarkMode();
        darkMode = 'enabled';
    }
});




const enableDayMode = function () {
    document.body.classList.add('dark-mode');
    console.log("enableDayMode()");
};
const enableDarkMode = function () {
    document.body.classList.remove('dark-mode');
    console.log("enableDarkMode()");
};


