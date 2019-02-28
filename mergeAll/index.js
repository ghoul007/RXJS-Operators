const {of, timer} = require('rxjs')
const {mergeAll, delay,  take} = require('rxjs/operators')

//11,22,33,44,1,2,3,4,5
const source1 = of(11,22,33,44).pipe(delay(500))
const source2 = of(1,2,3,4,5)
const source3 = timer(0,100).pipe(take(10))

of(source1, source2, source3).pipe(mergeAll()).subscribe((x)=>console.log(x))