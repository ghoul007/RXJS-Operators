const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

//1,2,1,2,1,2,1
of( 1,1,1,1,2,1,2,1,1,2,2,2,2,1).pipe(
    distinctUntilChanged()
).subscribe(x => console.log(x))