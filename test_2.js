

let batch = [[
    2, 1, 7, 4, 3,
    7, 7, 7, 7
], [
    2, 1, 7, 4, 3,
    7, 7, 7, 7
]]

function exec_code(batch){
    function is_valid_solution(solution, grid) {
        return true
    }
    let solutions = []
    for (let el in batch){
        if (is_valid_solution(batch[el], batch[el].length)) {
            solutions.push(batch[el].slice());
        }
    }
    return solutions
}


console.log(exec_code(batch))