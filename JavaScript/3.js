const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};

// Реализуйте функцию isEquivalent

function isEquivalent(object_1, object_2) {
    if (JSON.stringify(object_1) === JSON.stringify(object_2)) {
        return true;
    } else {
        return false;
    }
}
console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false