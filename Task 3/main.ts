function max ( ...arg: Array<number>): number{
    let a:number =arg[0];
    for(let i: number=1; i<arg.length; i++){
        a = (a<arg[i])? arg[i] : a;
    }
  return a;
}
console.log(max(5,-2));
console.log(max(5,-2, 30, 6) );