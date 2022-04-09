
	var date = '01/01/1997';
 
	if(date === ""){
		alert("Please complete the required field!");
    }else{
		var today = new Date();
		var birthday = new Date(date);
		var year = 0;
		if (today.getMonth() < birthday.getMonth()) {
			year = 1;
		} else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
			year = 1;
		}
		var age = today.getFullYear() - birthday.getFullYear() - year;
 
		if(age < 0){
			age = 0;
		}
		document.getElementById('age').innerHTML = age;
	}


    /*!
 * Dark Mode Switch v1.0.1 (https://github.com/coliff/dark-mode-switch)
 * Copyright 2021 C.Oliff
 * Licensed under MIT (https://github.com/coliff/dark-mode-switch/blob/main/LICENSE)
 */
var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", (function () {
    if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener("change", (function () {
            resetTheme()
        }))
    }
}));

function initTheme() {
    var darkThemeSelected = localStorage.getItem("darkSwitch") !== null && localStorage.getItem("darkSwitch") === "dark";
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme")
}

function resetTheme() {
    if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark")
    } else {
        
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch")
    }
}

