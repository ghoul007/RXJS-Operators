const {interval} = require('rxjs');
const {debounceTime, take, buffer} = require('rxjs/operators');


interval(100)
.pipe(buffer(interval(1000)))
.subscribe(
    res=> console.log(res)
)