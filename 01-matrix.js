const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function updateMatrix(mat) {
    const result = Array.from(Array(mat.length), () => Array(mat[0].length).fill(-1));
    const q = [];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 0) {
                result[i][j] = 0;
                q.push([i, j]);
            }
        }
    }

    while (q.length) {
        const [i, j] = q.shift();

        for (const [r, c] of moves) {
            if (mat[i + r]?.[j + c] == null) continue;
            if (result[i + r][j + c] == -1) {
                result[i + r][j + c] = result[i][j] + 1;
                q.push([i + r, j + c]);
            }
        }
    }
    return result;
};
