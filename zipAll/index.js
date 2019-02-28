const { Observable, of } = require('rxjs');
const { zipAll } = require('rxjs/operators');

 const source1 = of('a', 'b', 'c')
 const source2 = of(1,2,3)
of(source1, source2).pipe(
    zipAll() 
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)