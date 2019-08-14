// Longest Common Subsequence - Dynamic Programming
lcs = (s1, s2) => {

    var matrix = [];
    for (var i = 0; i < s1.length + 1; i++) {
        matrix[i] = new Array(s2.length + 1);
    }

    for (let row = 0; row <= s1.length; row++) {
        for (let column = 0; column <= s2.length; column++) {
            if (row === 0 || column === 0)
                matrix[row][column] = 0;
            else if (s1[row - 1] == s2[column - 1])
                matrix[row][column] = matrix[row - 1][column - 1] + 1;
            else
                matrix[row][column] = Math.max(matrix[row - 1][column], matrix[row][column - 1]);
        }
    }

    const lcsLength = matrix[s1.length][s2.length];
    const result = new Array(lcsLength);

    for (let i = s1.length, j = s2.length, k = lcsLength - 1; k >= 0;) {
        if (s1[i - 1] == s2[j - 1]) {
            result[k] = s1[i - 1];
            i--; j--; k--;
        }
        else if (matrix[i][j - 1] > matrix[i - 1][j])
            j--;
        else
            i--;
    }
    return result.join('');
}

module.exports = lcs;