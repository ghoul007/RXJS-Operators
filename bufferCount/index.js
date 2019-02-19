const {of} = require('rxjs');
const {  bufferCount} = require('rxjs/operators');

//[1,2][3]
of(1,2,3)
.pipe(bufferCount(2))
.subscribe(
    res=> console.log(res)
)

//[1,2][2,3],[3]
of(1,2,3)
.pipe(bufferCount(2,1))
.subscribe(
    res=> console.log(res)
)