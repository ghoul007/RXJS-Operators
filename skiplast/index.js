const { Observable, of } = require('rxjs');
const { skipLast } = require('rxjs/operators');

 // success 1
of(1,2,3).pipe(
    skipLast(2) 
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)