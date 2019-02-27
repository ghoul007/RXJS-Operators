const { Observable, of, timer } = require('rxjs');
const { take, skipWhile } = require('rxjs/operators');

// success 3,4,5
of(2, 1, 2, 3, 1, 2, 5, 1, 2).pipe(
    skipWhile(val => val < 3)
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)