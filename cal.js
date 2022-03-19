console.log('Digital Calculator');

let gridScreen = document.getElementById('gridScreen');
buttons = document.querySelectorAll('button');

let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerHTML;
        console.log('Button value is', buttonText);

        if(buttonText == 'C'){
            screenValue = " ";
            gridScreen.value = screenValue;
        }
        else if(buttonText == '='){
            gridScreen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            gridScreen.value = screenValue;
        }
    })
}
