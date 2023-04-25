const COLOR_BTNS = document.querySelector('.btn-area');
COLOR_BTNS.forEach(color => {
    color.addEventListener('click', () => {
        console.log("clicked");
        let colorNameClass = color.className;
        if(!color.classList.contains('active-color')){
            let colorName = colorNameClass.slice(colorNameClass.indexOf('_') + 1, colorNameClass.length);
            resetActiveBtns();
            color.classList.add('active-color');
            setNewColor(colorName)
        }
    });
})


function resetActiveBtns(){
    COLOR_BTNS.forEach(color => {
        color.classList.remove('active-color');
    });
}

 
function setNewColor(color){
    document.querySelector('.box img').src = `D:\WT project\1_${color}.jpeg`;
    document.querySelector('.box img').src = `D:\WT project\2_${color}.jpeg`;
    document.querySelector('.box img').src = `D:\WT project\3_${color}.jpeg`;
}

