const { of } = require('rxjs');
const { filter } = require('rxjs/operators');

//4,6
of(1, 4, 5, 3, 1, 9, 6).pipe(
    filter(x => x % 2 == 0)
).subscribe(x => console.log(x))