/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points
        .map(([x, y]) => [x * x + y * y, [x, y]])
        .sort(([a], [b]) => a - b)
        .slice(0, k)
        .map(([, point]) => point)
};
