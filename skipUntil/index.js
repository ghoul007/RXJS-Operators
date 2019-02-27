const { Observable, of, timer } = require('rxjs');
const { take, skipUntil } = require('rxjs/operators');

 // success 3,4,5
timer(0,1000).pipe(
    take(6),
    skipUntil(timer(3000)) 
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)