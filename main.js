/*
'ABAZDC', 'BACBAD' => 'ABAD'
'AGGTAB', 'GXTXAYB' => 'GTAB'
'aaaa', 'aa' => 'aa'
*/
const FindLongestCommonSequenceAmongTwoString = (s1, s2) => {   
    const result = new Array();
    const [st1, st2] = orderTwoStringbyLongestLength(s1, s2);
    let idx2StartPosition = 0;
    for(let st1Idx = 0; st1Idx < st1.length && idx2StartPosition < st2.length; st1Idx++){
        let St2Idx = st2.indexOf(st1[st1Idx], idx2StartPosition);
        if(St2Idx != -1){
            result.push(st2[St2Idx]);
            idx2StartPosition = St2Idx + 1;
        }   
    }
    return result.join('');
}
const orderTwoStringbyLongestLength = (st1, st2) => st1.length >= st2.length ? [st1, st2] : [st2, st1];
module.exports = [orderTwoStringbyLongestLength, FindLongestCommonSequenceAmongTwoString];