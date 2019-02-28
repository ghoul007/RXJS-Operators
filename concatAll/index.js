const {of} = require('rxjs')
const {concatAll, delay} = require('rxjs/operators')

//11,22,33,44,1,2,3,4,5
const source1 = of(11,22,33,44).pipe(delay(3000))
const source2 = of(1,2,3,4,5)

of(source1, source2).pipe(concatAll()).subscribe((x)=>console.log(x))