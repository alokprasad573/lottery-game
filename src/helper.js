function genTicket(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0); // Sum the elements of the array
}

export {genTicket, sum};