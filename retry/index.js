const { of } = require('rxjs');
const { retry, map } = require('rxjs/operators');


of('a',1).pipe(
    map(x=>x.toUpperCase()),
    retry(2)
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)