const { of } = require('rxjs');
const { first } = require('rxjs/operators');

//4,6
of(1, 4, 5, 3, 1, 9, 6).pipe(
    first(x => x % 2 == 0)
).subscribe(x => console.log(x))