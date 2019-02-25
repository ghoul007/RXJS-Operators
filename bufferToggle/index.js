const { interval } = require('rxjs');
const { tap, take, bufferWhen } = require('rxjs/operators');

let x= 0;
interval(500)
.pipe(
    tap((i)=>(w=i)),
    bufferWhen(()=>{
        if(x<5){
            return interval(1000)
        }
        return interval(500)
    }),
    take(10)
).subscribe((seq)=>console.log(seq))