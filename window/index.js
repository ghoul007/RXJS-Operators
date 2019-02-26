const { interval } = require('rxjs');
const { switchMap, take, window, toArray, tap } = require('rxjs/operators');


interval(100)
.pipe(
    window(interval(1000)),
    switchMap((x)=>x.pipe(toArray())),
    take(3)
).subscribe( console.log )