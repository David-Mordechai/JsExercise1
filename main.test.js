const [orderTwoStringbyLongestLength, FindLongestCommonSequenceAmongTwoString] = require('./main');

test('Get longest string between two strings', () =>{
    expect(orderTwoStringbyLongestLength('aa', 'bbbb')).toEqual(["bbbb", "aa"]);
    expect(orderTwoStringbyLongestLength('aaaa', 'bb')).toEqual(["aaaa", "bb"]);
    expect(orderTwoStringbyLongestLength('aaaa', 'bbbb')).toEqual(["aaaa", "bbbb"]);
});

test('Find longest common sequence among 2 string', () =>{
    expect(FindLongestCommonSequenceAmongTwoString('ABAZDC', 'BACBAD')).toBe("ABAD");
    expect(FindLongestCommonSequenceAmongTwoString('AGGTAB', 'GXTXAYB')).toBe("GTAB");
    expect(FindLongestCommonSequenceAmongTwoString('aaaa', 'aa')).toBe("aa");
});

