let batch = [
    [
        2, 1, 7, 4, 3,
        7, 7, 7, 6
    ], [
        2, 1, 7, 4, 3,
        7, 7, 7, 7
    ],[
        2, 6, 1, 5, 7,
        5, 4, 6, 3
    ],
    [
        2, 1, 7, 4, 3,
        7, 7, 7, 7
    ],
    [
        2, 1, 7, 5, 4,
        1, 4, 6, 3
    ],
    [
        2, 6, 1, 5, 7,
        5, 4, 6, 3
    ]
]

const grid = [
    'a', '0', 'a',
    '0', '0', '0',
    'a', '0', '0',
];
// console.log(batch.slice())
const code = `
                    let batch = ${JSON.stringify(batch)}
                    let grid = ${JSON.stringify(grid)}
                    function exec_code(batch){
                        function is_valid_solution(solution, grid) {
                            const size = grid.length;
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
                                    if (![1, 2, 3, 4].includes(parseInt(solution[i]))) {
                                        return false;
                                    }
                                }
                                if (grid[i] === 'b') {
                                    if (![5, 6].includes(parseInt(solution[i]))) {
                                        return false;
                                    }
                                }
                            }
                            return true;
                        }
                        let solutions = []
                        for (let el of batch){
                            if (is_valid_solution(el, grid)) {
                                solutions.push(el.slice());
                            }
                        }
                        return solutions
                    }`



// console.log(code)



try {
    console.log("----"+code+"----")
    eval(code)
    // console.log(exec_code(batch))
} catch (error) {
    console.error('Error executing code:', error);
}