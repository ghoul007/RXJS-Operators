const { Observable, of } = require('rxjs');
const { timeoutWith, map } = require('rxjs/operators');

const other = of('a', 'b', 'c')
const source = Observable.create(
    observer => {
        observer.next('A'),
        setTimeout(() => { observer.next('B') }, 100);
        setTimeout(() => { observer.next('C') }, 300);
        setTimeout(() => { observer.complete() }, 600);
    }
)
const  timeAt = new Date(Date.now()+ 500);
source.pipe(
    timeoutWith(100, other) //150
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)