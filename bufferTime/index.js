const {interval} = require('rxjs');
const {bufferTime, take} = require('rxjs/operators');


interval(500)
.pipe(take(6),bufferTime(3000,1000))
.subscribe(
    res=> console.log(res)
)