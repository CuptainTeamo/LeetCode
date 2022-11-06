// use a res array to store the result
// create a initial array with 1 for each element
// each array element is the sum of previous array's two element

var generate = function(numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++){
        let initArray = [1];
        res.push(initArray);
        for (let j = 0; j <= i; j++){
            if (j == 0 || j == i) {
                res[i][j] = 1;
            }
            else{
                res[i][j] = res[i-1][j-1] + res[i-1][j];
            }
        }
    }
    return res;
};


// test
console.log(generate(5))