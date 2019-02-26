const { interval, timer } = require('rxjs');
const { switchMap, take, windowCount, toArray, tap} = require('rxjs/operators');

const source  =  timer(0,100).pipe(take(10));

source
.pipe(
    windowCount(2),
    switchMap((x)=>x.pipe(toArray())),
).subscribe( console.log )