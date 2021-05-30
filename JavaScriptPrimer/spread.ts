function calc(...args:number[]) {
  return args.reduce((accum:number,current:number)=> accum += current);
}

console.log(calc(10,100,1000,10000))

