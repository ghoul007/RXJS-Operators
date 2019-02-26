const { Observable } = require('rxjs');
const { timeout, map } = require('rxjs/operators');


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
    timeout(timeAt) //150
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)