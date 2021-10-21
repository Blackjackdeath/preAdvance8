function max(...arg) {
    let a = arg[0];
    for (let i = 1; i < arg.length; i++) {
        a = (a < arg[i]) ? arg[i] : a;
    }
    return a;
}
console.log(max(5, -2));
console.log(max(5, -2, 30, 6));
