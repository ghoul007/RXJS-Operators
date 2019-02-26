const { of } = require('rxjs');
const { catchError, map } = require('rxjs/operators');

of('a', 1).pipe(
    map(v => v.toUpperCase()),
    catchError(err => 
        of(undefined)
        // throwError('e =>', err)
    )
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)