/// Используя потоки чтения и записи, мы 
// можем считывать и записывать информацию в файл. Например:

const fs = require("fs");
 
let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf8");
 
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});

///Для создания потока для записи применяется метод fs.createWriteStream(), 
// в который передается название файла. Если вдруг в папке нет такого файла, то он создается.