let batch = [[
    2, 1, 7, 4, 3,
    7, 7, 7, 7
], [
    2, 1, 7, 4, 3,
    7, 7, 7, 7
]]


const code = "const solutions = [];"+"function is_valid_solution(solution, grid) {\n" +
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
    "f"
    `for (let el in ${batch}){\n` +
    "                    if (is_valid_solution(batch[el], grid)) {\n" +
    "                        solutions.push(batch[el].slice());\n" +
    "                        return solutions\n" +
    "                    }\n" +
    "                }"

console.log(eval(code))