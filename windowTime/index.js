const { interval, timer } = require('rxjs');
const { switchMap, take, windowTime, toArray, tap} = require('rxjs/operators');

const source  =  timer(0,100).pipe(take(10));

source
.pipe(
    windowTime(200),
    switchMap((x)=>x.pipe(toArray())),
).subscribe( console.log )