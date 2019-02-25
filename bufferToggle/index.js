const { interval } = require('rxjs');
const { tap, take, bufferToggle } = require('rxjs/operators');

const opening = interval(400).pipe(tap(() => console.log('open')))
const closing = ()=>interval(300).pipe(tap(() => console.log('close')))

interval(200)
.pipe(
    tap((x)=>console.log(x)),
    bufferToggle(opening, closing),
    take(3)
).subscribe((seq)=>console.log(seq))