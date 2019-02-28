const {of} = require('rxjs')
const {pairwise} = require('rxjs/operators')

//11,22,33,44,1,2,3,4,5
const source1 = [1,2,3,4,5];

of(...source1).pipe(pairwise()).subscribe((x)=>console.log(x))