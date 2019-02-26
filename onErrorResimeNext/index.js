const { of } = require('rxjs');
const { onErrorResumeNext, map } = require('rxjs/operators');


const source = of('feed1', 'feed2', 'feed3');
const buckup = of(' hander error')
source.pipe(
    map(feed =>{
        if(feed==='feed2'){
            throw new Error('oops')
        }
        return feed
    }),
    onErrorResumeNext(buckup)
).subscribe(
    success => console.log("success " + success),
    err => console.log("err " + err),
    () => console.log("complete"),
)