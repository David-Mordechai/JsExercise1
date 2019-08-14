const lcs = require('./main');

test("1.  'ABAZDC'      'BACBAD'    => 'ABAD'", () => {
    expect(lcs('ABAZDC', 'BACBAD')).toBe("ABAD");
});
test("2.  'AGGTAB'      'GXTXAYB'   => 'GTAB'", () => {
    expect(lcs('AGGTAB', 'GXTXAYB')).toBe("GTAB");
});
test("3.  'aaaa'        'aa'        => 'aa'", () => {
    expect(lcs('aaaa', 'aa')).toBe("aa");
});
test("4.  'acbaed'      'abcadf'    => 'acad'", () => {
    expect(lcs('acbaed', 'abcadf')).toBe("acad");
});
test("5.  'dcbaabc'     'abcdcba'   => 'dcba'", () => {
    expect(lcs('dcbaabc', 'abcdcba')).toBe("dcba");
});
test("6.  'ABCDGH'      'AEDFHR'    => 'ADH'", () => {
    expect(lcs('ABCDGH', 'AEDFHR')).toBe("ADH");
});
test("7.  'abcdefghij'  'ecdgi'     => 'cdgi'", () => {
    expect(lcs('abcdefghij', 'ecdgi')).toBe("cdgi");
});
test("8.  'abcefgdx'    'efgdabc'   => 'efgd'", () => {
    expect(lcs('abcefgdx', 'efgdabc')).toBe("efgd");
});
test("9.  'acbad'       'babazdc'   => 'abad'", () => {
    expect(lcs('acbad', 'babazdc')).toBe("abad");
});
test("10. 'A'           'B'         => ''", () => {
    expect(lcs('A', 'B')).toBe("");
});
test("11. 'jklABCDGH'   'AEDFHRjkl' => 'jkl' or 'ADH'", () => {
    const result = lcs('jklABCDGH', 'AEDFHRjkl');
    expect(result === 'jkl' || result === 'ADH').toBeTruthy();
});
