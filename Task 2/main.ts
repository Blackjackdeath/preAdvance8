let a: unknown =prompt('Введіть число');
let b: string = ((a as number)==0) ? 'Число 0': (((a as number)%2==1) ? 'Число не парне' : 'Число парне');
console.log(b);