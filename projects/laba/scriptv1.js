const ask = function () {
    let answer = prompt("с каким массивом вы хотите работать?" + "\n" + "1 - одномерный " + "\n" + "2 - двумерный " + "\n" + "3 - ступенчатый ")
    switch (answer) {
        case "1":
            ASK_WHICH_TYPE_INPUT_FOR_ONE_DIMENSION_ARRAY();
            break;
        case "2":
            ASK_WHICH_TYPE_INPUT_FOR_TWO_DIMENSION_ARRAY();
            break;
        case "3":
            WHICH_TYPE_FOR_STEP();
            break;
            
    }

}
const ASK_WHICH_TYPE_INPUT_FOR_ONE_DIMENSION_ARRAY = function () {
    let answer = prompt('Как вы хотите ввести массив ?' + '\n' + "Введите 1 - самостоятельно " + '\n' + "               2 - рандом")
    switch (answer) {
        case "1":
            SELF_INPUT_IN_ONE_DIMENSION_ARRAY();
            //MaxMinSearchinOneDimArray(Arr);
            break;
        case "2":
            alert("Ваш массив: " + RANDOM_INPUT_IN_ONE_DIMENSION_ARRAY());
            break;

    }
}
const ASK_WHICH_TYPE_INPUT_FOR_TWO_DIMENSION_ARRAY = function () {
    let answer = prompt('Как вы хотите ввести массив ?' + '\n' + "Введите 1 - самостоятельно " + '\n' + "               2 - рандом")
    switch (answer) {
        case "1":
            SELF_INPUT_IN_TWO_DIMENSION_ARRAY();
            break;
        case "2":
            console.table(RANDOM_INPUT_IN_TWO_DIMENSION_ARRAY());
            break;

    }
}

const SELF_INPUT_IN_ONE_DIMENSION_ARRAY = function () {
    let lg = prompt("Какого размера будет массив?")
    let Arr = [];
    let max = Arr[0];
    let min = Arr[0];
    for (let i = 0; i < lg; i++) {
        Arr[i] = prompt("Введите элемент: " + (i + 1))
        document.write(Arr[i]+"<div/>")
    }    console.table(Arr);

    for (let j =0;j<lg;j++){
        if(Arr[j] > max){
            max = Arr[j];
        }else if (Arr[j] < min){
            min = Arr[j]
        }

 }
    console.log(min,max)
}
// //     ПЕРЕНЕСТИ ФУНКЦИЮ ОТ СЮДА
// const MaxMinSearchinOneDimArray= function(Arr){
//     for(let i = 0;i<Arr.length;i++){
//         alert(Arr[i])
//     }
// }

//                \\
const RANDOM_INPUT_IN_ONE_DIMENSION_ARRAY = function () {
    let lg = randomInteger(2, 10);
    let Rarr = [];
    for (let i = 0; i < lg; i++) {
        Rarr[i] = randomInteger(-1000, 1000)
    }
    console.table(Rarr)
    return Rarr;
}

const randomInteger = function (min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand); //Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
}
const RANDOM_INPUT_IN_TWO_DIMENSION_ARRAY = function () {
    let rows = randomInteger(5, 20);
    let cols = randomInteger(5, 20)

    let arr = [];

    // Создает все строки
    for (var i = 0; i < rows; i++) {

        //  Создает пустую строку
         arr.push([]);

        // Добавляет колонку на пустую строку
        arr[i].push(new Array(cols));

        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = randomInteger(-1000, 1000);
         }

    }

    return arr;
}
const SELF_INPUT_IN_TWO_DIMENSION_ARRAY = function () {
    let rows = prompt("Сколько будет строк", 1)
    let cols = prompt("Сколько будет колонок", 1)
    let arr = [];
    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        arr.push([]);
        // Добавляет колонку на пустую строку
        arr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = prompt("Введите элемент массива: " + (i) + (j));
        }
        
    }
    
    
    console.table(arr)
    return arr;
}

const WHICH_TYPE_FOR_STEP = function(){
    let answer = prompt("Как заполните ? " + "\n" + "1 - Сами" + "\n" + "2 - рандом")
    switch(answer) {
        case "1": SELF_INPUT_IN_STEP_ARR()
        break;
        case "2": 
        break;
    }    

}
const RANDOM_STEP = function(){
     let rows = randomInteger(2,10)
     let cols = randomInteger(2,10)
     let arr = []
           
     

}
const SELF_INPUT_IN_STEP_ARR =function(){
    let answer = prompt("Сколько будет строк?");
    let arr=[];
    for(let i =0; i<answer; i++,document.write("<br/>")){
        //  let arr=[];
        let answer2 = prompt("Сколько элементов в строке № "+ (i+1))
        for(let j =0;j<=answer2; j++) {
          arr[i][j]=prompt(" Введите " + " элемент № " +j+ " строки № "  + (i+1) )
          document.write(arr[i][j] )
    }  
    
    }
//alert(arr)
}
const RANDOM_INPUT_ARR = function(){
     let randomstr = randomInteger(2,20)
     for(let i =0; i<randomstr; i++,document.write("<br/>")){
        let arr=[];
       let answer2 = randomInteger(2,20)
       for(let j =0;j<=answer2; j++) {
         arr[i][j]=randomInteger(-1000,1000)
         document.write(arr[i][j] )
   }  
}}


ask()
//MaxMinSearchinOneDimArray(ask())
