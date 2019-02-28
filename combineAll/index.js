const {of} = require('rxjs')
const {combineAll, delay} = require('rxjs/operators')

const source1 = of(11,22,33,44).pipe(delay(2000))
const source2 = of(1,2,3,4,5)

of(source1, source2).pipe(combineAll()).subscribe(([x,y])=>console.log(x,y))