const { of } = require('rxjs');
const { throwIfEmpty, map } = require('rxjs/operators');

of().pipe(
    throwIfEmpty(),
    map(v => v.toUpperCase()),
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)