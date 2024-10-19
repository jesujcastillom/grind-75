const positions = [
    [-1, 0], // top
    [0, 1], // right
    [0, -1], // left
    [1, 0],
];
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, originalColor = image[sr][sc]) {
    if (color === originalColor) return image;
    image[sr][sc] = color;
    positions
        .filter(([row, column]) => image?.[sr + row]?.[sc + column] === originalColor)
        .forEach(([row, column]) => {
            floodFill(image, sr + row, sc + column, color, originalColor);
        });
    return image;

};
