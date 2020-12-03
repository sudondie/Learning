const input = {
    ' ' : [5],
    d : [10],
    e : [1],
    h : [0],
    l : [2,3,9],
    o : [4,7],
    r : [8],
    w : [6]
}

const builtString = (o) => {
    let result = [];
    for(let i of o) {
        for(let j of o) {
            console.log(o[i])
        }
    }
}
builtString(input);