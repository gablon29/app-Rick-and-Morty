const arr = [{a: 1}, {a: 3}];

function a(arr, id) {
    let esta = arr.find(arr => arr.a === id) !== undefined;
    return esta
}
console.log(a(arr, 3))