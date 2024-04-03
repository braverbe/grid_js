

function exec_code(batch){
    function is_valid_solution(solution, grid) {
        const size = solution.length;
        const length = Math.sqrt(size);

        for (let i = 0; i < solution.length; i++) {
            try {
                if (solution[i] === 1) {
                    if (![2, 4, 6].includes(solution[i - 1])) {
                        return false;
                    }
                    if (![3, 4, 5].includes(solution[i + length])) {
                        return false;
                    }
                } else if (solution[i] === 2) {
                    if (![1, 3, 6].includes(solution[i + 1])) {
                        return false;
                    }
                    if (![3, 4, 5].includes(solution[i + length])) {
                        return false;
                    }
                } else if (solution[i] === 3) {
                    if (![2, 4, 6].includes(solution[i - 1])) {
                        return false;
                    }
                    if (![1, 2, 5].includes(solution[i - length])) {
                        return false;
                    }
                } else if (solution[i] === 4) {
                    if (![1, 3, 6].includes(solution[i + 1])) {
                        return false;
                    }
                    if (![1, 2, 5].includes(solution[i - length])) {
                        return false;
                    }
                } else if (solution[i] === 5) {
                    if (![3, 4].includes(solution[i + length])) {
                        return false;
                    }
                    if (![1, 2].includes(solution[i - length])) {
                        return false;
                    }
                } else if (solution[i] === 6) {
                    if (![1, 3].includes(solution[i + 1])) {
                        return false;
                    }
                    if (![2, 4].includes(solution[i - 1])) {
                        return false;
                    }
                }
            } catch (error) {
                return false;
            }

            if (i < length) {
                if ([3, 4, 5].includes(solution[i])) {
                    return false;
                }
            }
            if (i >= size - length) {
                if ([1, 2, 5].includes(solution[i])) {
                    return false;
                }
            }
            if (i % length === 0) {
                if ([1, 3, 6].includes(solution[i])) {
                    return false;
                }
            }
            if (i % length === length - 1) {
                if ([2, 4, 6].includes(solution[i])) {
                    return false;
                }
            }

            if (grid[i] === 'a') {
                if (![1, 2, 3, 4].includes(solution[i])) {
                    return false;
                }
            }
            if (grid[i] === 'b') {
                if (![5, 6].includes(solution[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    let solutions = [];
    for (let el of batch){
        if (is_valid_solution(el, el.length)) {
            solutions.push(el);
        }
    }
    return solutions;
}


let batch = [[
    2, 1, 7, 4, 3,
    7, 7, 7, 6
], [
    2, 1, 7, 4, 3,
    7, 7, 7, 7
]]

console.log(exec_code(batch))