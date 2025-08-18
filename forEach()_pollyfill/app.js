Array.prototype.myForEach = function (callBackFunc) {
    const originalArr = this;
    for (let i = 0; i < originalArr.length; i++) {
        const res = callBackFunc(originalArr[i], i, originalArr);
        console.log(res);
    }
};

const num = [2, 4, 5, 8, 9];
num.myForEach((elem, index, arr) => {
    return elem * 2;
});

