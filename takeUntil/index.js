const { Observable, of, timer } = require('rxjs');
const { take, takeUntil } = require('rxjs/operators');

 // success 0,1,2
timer(0,1000).pipe(
    take(6),
    takeUntil(timer(3000)) 
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)