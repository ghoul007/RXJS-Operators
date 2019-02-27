const { of } = require('rxjs');
const { find } = require('rxjs/operators');

//4
of(1, 4, 5, 3, 1, 9, 6).pipe(
    find(x => x % 2 == 0)
).subscribe(x => console.log(x))