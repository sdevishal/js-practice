Array.prototype.myMap = function (callbackFunc) {
    const originalArr = this;
    const resArr = [];
    for (let i = 0; i < originalArr.length; i++) {
        const funcRes = callbackFunc(originalArr[i]);
        resArr.push(funcRes);
    }
    return resArr;

};

const num = [2, 3, 6];
const res = num.myMap((elem) => {
    return elem * 2;
});
console.log(res);