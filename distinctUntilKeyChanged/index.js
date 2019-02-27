const { of } = require('rxjs');
const { distinctUntilKeyChanged } = require('rxjs/operators');

of({ name: "ahmed", age: 20 , likes:1 },
    { name: "ali", age: 20, likes:1 },
    { name: "ahmed", age: 25, likes:2 },
).pipe(
    distinctUntilKeyChanged('likes')
).subscribe(x => console.log(x))