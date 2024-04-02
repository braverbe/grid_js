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

function generate_solutions(grid, batchsize) {
    const size = grid.length;
    const solutions = [];
    const possible_values = Array.from({length: 7}, (_, i) => i + 1);
    let batch = []

    const generate_next = (current_solution, index) => {
        if (index === size) {
            if (batch.length===batchsize){
                // for (let el in batch){
                //     if (is_valid_solution(batch[el], grid)) {
                //         solutions.push(batch[el].slice());
                //         console.log(solutions)
                //     }
                // }

                const code = "function is_valid_solution(solution, grid) {\n" +
                    "    const size = grid.length;\n" +
                    "    const length = Math.sqrt(size);\n" +
                    "\n" +
                    "    for (let i = 0; i < solution.length; i++) {\n" +
                    "        try {\n" +
                    "            if (solution[i] === 1) {\n" +
                    "                if (![2, 4, 6].includes(solution[i - 1])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "                if (![3, 4, 5].includes(solution[i + length])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "            } else if (solution[i] === 2) {\n" +
                    "                if (![1, 3, 6].includes(solution[i + 1])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "                if (![3, 4, 5].includes(solution[i + length])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "            } else if (solution[i] === 3) {\n" +
                    "                if (![2, 4, 6].includes(solution[i - 1])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "                if (![1, 2, 5].includes(solution[i - length])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "            } else if (solution[i] === 4) {\n" +
                    "                if (![1, 3, 6].includes(solution[i + 1])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "                if (![1, 2, 5].includes(solution[i - length])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "            } else if (solution[i] === 5) {\n" +
                    "                if (![3, 4].includes(solution[i + length])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "                if (![1, 2].includes(solution[i - length])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "            } else if (solution[i] === 6) {\n" +
                    "                if (![1, 3].includes(solution[i + 1])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "                if (![2, 4].includes(solution[i - 1])) {\n" +
                    "                    return false;\n" +
                    "                }\n" +
                    "            }\n" +
                    "        } catch (error) {\n" +
                    "            return false;\n" +
                    "        }\n" +
                    "\n" +
                    "        if (i < length) {\n" +
                    "            if ([3, 4, 5].includes(solution[i])) {\n" +
                    "                return false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        if (i >= size - length) {\n" +
                    "            if ([1, 2, 5].includes(solution[i])) {\n" +
                    "                return false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        if (i % length === 0) {\n" +
                    "            if ([1, 3, 6].includes(solution[i])) {\n" +
                    "                return false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        if (i % length === length - 1) {\n" +
                    "            if ([2, 4, 6].includes(solution[i])) {\n" +
                    "                return false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "\n" +
                    "        if (grid[i] === 'a') {\n" +
                    "            if (![1, 2, 3, 4].includes(solution[i])) {\n" +
                    "                return false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "        if (grid[i] === 'b') {\n" +
                    "            if (![5, 6].includes(solution[i])) {\n" +
                    "                return false;\n" +
                    "            }\n" +
                    "        }\n" +
                    "    }\n" +
                    "    return true;\n" +
                    "}" +
                    "function* product(iterables, repeat) {\n" +
                    "    function* iter(pool, n) {\n" +
                    "        if (n === 0) {\n" +
                    "            yield [];\n" +
                    "            return;\n" +
                    "        }\n" +
                    "        for (const elem of pool) {\n" +
                    "            for (const product of iter(pool, n - 1)) {\n" +
                    "                yield [elem, ...product];\n" +
                    "            }\n" +
                    "        }\n" +
                    "    }\n" +
                    "\n" +
                    "    for (let i = 0; i < repeat; i++) {\n" +
                    "        yield* iter(iterables, repeat);\n" +
                    "    }\n" +
                    "}" +
                    `for (let el in ${batch}){\n` +
                    "                    if (is_valid_solution(batch[el], grid)) {\n" +
                    "                        solutions.push(batch[el].slice());\n" +
                    "                        console.log(solutions)\n" +
                    "                    }\n" +
                    "                }"

                //тут отправка будет
                batch = []
            }
            batch.push(current_solution.slice())
            return;
        }


        for (const value of possible_values) {
            current_solution[index] = value;
            generate_next(current_solution, index + 1);
        }
    };



    generate_next(new Array(size).fill(1), 0);
    return solutions;
}



function print_solutions(solutions, size) {
    for (const solution of solutions) {
        print_table(solution, size);
        console.log('------------');
    }
}

function print_table(solution, size) {
    const length = Math.sqrt(size);
    const symbol_map = {
        1: '\u2510',
        2: '\u250C',
        3: '\u2518',
        4: '\u2514',
        5: '\u2502',
        6: '\u2500',
        7: ' '
    };

    for (let i = 0; i < length; i++) {
        const row = solution.slice(i * length, (i + 1) * length);
        let row_str = '';
        for (const cell of row) {
            row_str += '[' + symbol_map[cell] + '] ';
        }
        console.log(row_str);
        if (i < length - 1) {
            console.log('    ');
        }
    }
}

// Здесь определение функции product
function* product(iterables, repeat) {
    function* iter(pool, n) {
        if (n === 0) {
            yield [];
            return;
        }
        for (const elem of pool) {
            for (const product of iter(pool, n - 1)) {
                yield [elem, ...product];
            }
        }
    }

    for (let i = 0; i < repeat; i++) {
        yield* iter(iterables, repeat);
    }
}

const grid = [
    '0', '0', '0',
    '0', '0', '0',
    '0', '0', '0',
];
const batchsize = 10
const size = grid.length;
const solutions = generate_solutions(grid, batchsize);
console.log('Всего решений:', solutions.length);
print_solutions(solutions, size);
