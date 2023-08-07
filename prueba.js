const arr = [{a: 1}, {a: 3}];

function a(arr, id) {
    let esta = arr.find(id => arr.a === id) !== undefined;
    return esta
}