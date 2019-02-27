const { of } = require('rxjs');
const { distinct } = require('rxjs/operators');

of({ name: "ahmed", age: 20 },
    { name: "ali", age: 20 },
    { name: "ahmed", age: 25 },
).pipe(
    distinct((val) => val.name)
).subscribe(x => console.log(x))