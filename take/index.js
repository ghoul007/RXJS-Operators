const { Observable, of } = require('rxjs');
const { take } = require('rxjs/operators');

 // success 1,2
of(1,2,3).pipe(
    take(2) 
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)