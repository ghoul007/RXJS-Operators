const { of } = require('rxjs')
const { partition } = require('rxjs/operators')

//11,22,33,44,1,2,3,4,5
const source1 = [
    { name: "ahmed", isLiked: true },
    { name: "ahmed", isLiked: true },
    { name: "ahmed", isLiked: false },
];

[a, b] = of(...source1).pipe(partition(x => x.isLiked));
a.subscribe(console.log)
b.subscribe(console.log)