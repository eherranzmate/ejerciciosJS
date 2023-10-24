let handleFocus = function(focus) {
    console.log(this.value) 
}

let focusInput$$ = document.querySelector('input');
focusInput$$.addEventListener('focus', handleFocus)