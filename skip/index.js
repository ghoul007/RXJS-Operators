const { Observable, of } = require('rxjs');
const { skip } = require('rxjs/operators');

 // success 3
of(1,2,3).pipe(
    skip(2) 
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)