Array.prototype.myFilter = function (callback) {
    const originalArr = this;
    const resArr = [];
    for (let i = 0; i < originalArr.length; i++) {
        const funcRes = callback(originalArr[i]);
        if (funcRes === true) resArr.push(originalArr[i]);
    }
    return resArr;
};

const num = [2, 3, 4, 5, 6, 7, 8, 9];
const res = num.myFilter(elem => elem % 2 === 0);
console.log(res);