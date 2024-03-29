function swapnum(x,y){
    [x,y] = [y,x];
    return [x,y];
}

let x = 5,y=10;

[x,y] = swapnum(x,y);

console.log("X = ",x);
console.log("Y = ",y);