function square( a?:unknown){
 if (a==null){
     return console.log('Будь ласка введіть число!');
 }
 if (typeof(a)!='number'){
     return console.log('Повинно бути числове значення');
 }
 if ((a as number)<0){
    return console.log('Повинно бути lодатнє число');
 }
 if ((a as number)>0){
     return console.log(Math.sqrt(a));
 }
}
square();
square('dsfsdf');
square(-3);
square(4);


