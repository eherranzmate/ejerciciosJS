let handleFocus = function(focus) {
    console.log(focus) 
}

let focusInput = document.querySelector('input');
focusInput.addEventListener('focus', handleFocus)