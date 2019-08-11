const [orderTwoStringbyLongestLength, FindLongestCommonSequenceAmongTwoString] = require('./main');

test('Get longest string between two strings', () =>{
    expect(orderTwoStringbyLongestLength('aaaa', 'aa')).toEqual(["aaaa", "aa"]);
});

test('Find longest common sequence among 2 string', () =>{
    expect(FindLongestCommonSequenceAmongTwoString('ABAZDC', 'BACBAD')).toBe("ABAD");
    expect(FindLongestCommonSequenceAmongTwoString('AGGTAB', 'GXTXAYB')).toBe("GTAB");
    expect(FindLongestCommonSequenceAmongTwoString('aaaa', 'aa')).toBe("aa");
});

