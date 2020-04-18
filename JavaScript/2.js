// Реализуйте функцию sum

function sum() {
    var summa = 0;
    for (var i = 0; i < this.length; i++) {
        summa += this[i];
    }
    return summa;
    //console.log(this);
}
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));