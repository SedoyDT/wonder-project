function display(data, callback){
    // const randomInteger = function (min, max) {
    //     // случайное число от min до (max+1)
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand); //Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
    // }
    // с помощью случайного числа определяем ошибку
     var randInt = Math.random() * (10 - 1) + 1;
        
     var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 0);
}
 
console.log("Начало работы программы");
 
display("Обработка данных...", function (err, data){
 
    if(err) throw err;
    console.log(data);
});
 
console.log("Завершение работы программы");