function titleCase(string) {
    var sentence = string.toString().toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toString().toUpperCase() + sentence[i].slice(1);
    };
    return sentence;
};

function commaNumber( x ) {
    x = Math.round( x );
    return x.toLocaleString()
};

function abbridgeNumber( x ) {
    var x = Math.round( x );
    return (

        x < 1.0e+3 ? x
        : x < 1.0e+6 ? ( x / 1.0e+3 ).toPrecision(4) + ' K'
        : x < 1.0e+9 ? ( x / 1.0e+6 ).toPrecision(4) + ' M'
        : x < 1.0e+12 ? ( x / 1.0e+9 ).toPrecision(4) + ' B'
        : x < 1.0e+15 ? ( x / 1.0e+12 ).toPrecision(4) + ' T'
        : x < 1.0e+18 ? ( x / 1.0e+15 ).toPrecision(4) + ' AA'
        : x < 1.0e+21 ? ( x / 1.0e+18 ).toPrecision(4) + ' BB'
        : x < 1.0e+24 ? ( x / 1.0e+21 ).toPrecision(4) + ' CC'
        : x < 1.0e+27 ? ( x / 1.0e+24 ).toPrecision(4) + ' DD'
        : x < 1.0e+30 ? ( x / 1.0e+27 ).toPrecision(4) + ' EE'
        : x < 1.0e+33 ? ( x / 1.0e+30 ).toPrecision(4) + ' FF'
        : x < 1.0e+36 ? ( x / 1.0e+33 ).toPrecision(4) + ' GG'
        : x < 1.0e+39 ? ( x / 1.0e+36 ).toPrecision(4) + ' HH'
        : x < 1.0e+42 ? ( x / 1.0e+39 ).toPrecision(4) + ' II'
        : x < 1.0e+45 ? ( x / 1.0e+42 ).toPrecision(4) + ' JJ'
        : x < 1.0e+48 ? ( x / 1.0e+45 ).toPrecision(4) + ' KK'
        : x < 1.0e+51 ? ( x / 1.0e+48 ).toPrecision(4) + ' LL'
        : x < 1.0e+54 ? ( x / 1.0e+51 ).toPrecision(4) + ' MM'
        : x < 1.0e+57 ? ( x / 1.0e+54 ).toPrecision(4) + ' NN'
        : x < 1.0e+60 ? ( x / 1.0e+57 ).toPrecision(4) + ' OO'
        : x < 1.0e+63 ? ( x / 1.0e+60 ).toPrecision(4) + ' PP'
        : x < 1.0e+66 ? ( x / 1.0e+63 ).toPrecision(4) + ' QQ'
        : x < 1.0e+69 ? ( x / 1.0e+66 ).toPrecision(4) + ' RR'
        : x < 1.0e+72 ? ( x / 1.0e+69 ).toPrecision(4) + ' SS'
        : x < 1.0e+75 ? ( x / 1.0e+72 ).toPrecision(4) + ' TT'
        : x < 1.0e+78 ? ( x / 1.0e+75 ).toPrecision(4) + ' UU'
        : x < 1.0e+81 ? ( x / 1.0e+78 ).toPrecision(4) + ' VV'
        : x < 1.0e+84 ? ( x / 1.0e+81 ).toPrecision(4) + ' WW'
        : x < 1.0e+87 ? ( x / 1.0e+84 ).toPrecision(4) + ' XX'
        : x < 1.0e+90 ? ( x / 1.0e+87 ).toPrecision(4) + ' YY'
        : x < 1.0e+93 ? ( x / 1.0e+90 ).toPrecision(4) + ' ZZ'
        : x < 1.0e+96 ? ( x / 1.0e+93 ).toPrecision(4) + ' AAA'
        : x < 1.0e+99 ? ( x / 1.0e+96 ).toPrecision(4) + ' BBB'
        : x < 1.0e+102 ? ( x / 1.0e+99 ).toPrecision(4) + ' CCC'
        : x < 1.0e+105 ? ( x / 1.0e+102 ).toPrecision(4) + ' DDD'
        : x < 1.0e+108 ? ( x / 1.0e+105 ).toPrecision(4) + ' EEE'
        : x < 1.0e+111 ? ( x / 1.0e+108 ).toPrecision(4) + ' FFF'
        : x < 1.0e+114 ? ( x / 1.0e+111 ).toPrecision(4) + ' GGG'
        : x < 1.0e+117 ? ( x / 1.0e+114 ).toPrecision(4) + ' HHH'
        : x < 1.0e+120 ? ( x / 1.0e+117 ).toPrecision(4) + ' III'
        : x < 1.0e+123 ? ( x / 1.0e+120 ).toPrecision(4) + ' JJJ'
        : x < 1.0e+126 ? ( x / 1.0e+123 ).toPrecision(4) + ' KFC'
        : x < 1.0e+129 ? ( x / 1.0e+126 ).toPrecision(4) + ' LLL'
        : x < 1.0e+132 ? ( x / 1.0e+129 ).toPrecision(4) + ' MMM'
        : x < 1.0e+135 ? ( x / 1.0e+132 ).toPrecision(4) + ' NNN'
        : x < 1.0e+138 ? ( x / 1.0e+135 ).toPrecision(4) + ' OOO'
        : x < 1.0e+141 ? ( x / 1.0e+138 ).toPrecision(4) + ' PPP'
        : x < 1.0e+144 ? ( x / 1.0e+141 ).toPrecision(4) + ' QQQ'
        : x < 1.0e+147 ? ( x / 1.0e+144 ).toPrecision(4) + ' RRR'
        : x < 1.0e+150 ? ( x / 1.0e+147 ).toPrecision(4) + ' SSS'
        : x < 1.0e+153 ? ( x / 1.0e+150 ).toPrecision(4) + ' TTT'
        : x < 1.0e+156 ? ( x / 1.0e+153 ).toPrecision(4) + ' UUU'
        : x < 1.0e+159 ? ( x / 1.0e+156 ).toPrecision(4) + ' VVV'
        : x < 1.0e+162 ? ( x / 1.0e+159 ).toPrecision(4) + ' WWW'
        : x < 1.0e+165 ? ( x / 1.0e+162 ).toPrecision(4) + ' XXX'
        : x < 1.0e+168 ? ( x / 1.0e+165 ).toPrecision(4) + ' YYY'
        : x < 1.0e+171 ? ( x / 1.0e+168 ).toPrecision(4) + ' ZZZ'
        : x < 1.0e+174 ? ( x / 1.0e+171 ).toPrecision(4) + ' AAAA'
        : x < 1.0e+177 ? ( x / 1.0e+174 ).toPrecision(4) + ' BBBB'
        : x < 1.0e+180 ? ( x / 1.0e+177 ).toPrecision(4) + ' CCCC'
        : x < 1.0e+183 ? ( x / 1.0e+180 ).toPrecision(4) + ' DDDD'
        : x < 1.0e+186 ? ( x / 1.0e+183 ).toPrecision(4) + ' EEEE'
        : x < 1.0e+189 ? ( x / 1.0e+186 ).toPrecision(4) + ' FFFF'
        : x < 1.0e+192 ? ( x / 1.0e+189 ).toPrecision(4) + ' GGGG'
        : x < 1.0e+195 ? ( x / 1.0e+192 ).toPrecision(4) + ' HHHH'
        : x < 1.0e+198 ? ( x / 1.0e+195 ).toPrecision(4) + ' IIII'
        : x < 1.0e+201 ? ( x / 1.0e+198 ).toPrecision(4) + ' KKKK'
        : x < 1.0e+204 ? ( x / 1.0e+201 ).toPrecision(4) + ' LLLL'
        : x < 1.0e+207 ? ( x / 1.0e+204 ).toPrecision(4) + ' MMMM'
        : x < 1.0e+210 ? ( x / 1.0e+207 ).toPrecision(4) + ' NNNN'
        : x < 1.0e+213 ? ( x / 1.0e+210 ).toPrecision(4) + ' OOOO'
        : x < 1.0e+216 ? ( x / 1.0e+213 ).toPrecision(4) + ' PPPP'
        : x < 1.0e+219 ? ( x / 1.0e+216 ).toPrecision(4) + ' QQQQ'
        : x < 1.0e+222 ? ( x / 1.0e+219 ).toPrecision(4) + ' RRRR'
        : x < 1.0e+225 ? ( x / 1.0e+222 ).toPrecision(4) + ' SSSS'
        : x < 1.0e+228 ? ( x / 1.0e+225 ).toPrecision(4) + ' TTTT'
        : x < 1.0e+231 ? ( x / 1.0e+228 ).toPrecision(4) + ' UUUU'
        : x < 1.0e+234 ? ( x / 1.0e+231 ).toPrecision(4) + ' VVVV'
        : x < 1.0e+237 ? ( x / 1.0e+234 ).toPrecision(4) + ' WWWW'
        : x < 1.0e+240 ? ( x / 1.0e+237 ).toPrecision(4) + ' XXXX'
        : x < 1.0e+243 ? ( x / 1.0e+240 ).toPrecision(4) + ' YYYY'
        : x < 1.0e+246 ? ( x / 1.0e+243 ).toPrecision(4) + ' ZZZZ'
        : x < 1.0e+249 ? ( x / 1.0e+246 ).toPrecision(4) + ' AAAAA'
        : x < 1.0e+252 ? ( x / 1.0e+249 ).toPrecision(4) + ' BBBBB'
        : x < 1.0e+255 ? ( x / 1.0e+252 ).toPrecision(4) + ' CCCCC'
        : x < 1.0e+258 ? ( x / 1.0e+255 ).toPrecision(4) + ' DDDDD'
        : x < 1.0e+261 ? ( x / 1.0e+258 ).toPrecision(4) + ' EEEEE'
        : x < 1.0e+264 ? ( x / 1.0e+261 ).toPrecision(4) + ' FFFFF'
        : x < 1.0e+267 ? ( x / 1.0e+264 ).toPrecision(4) + ' GGGGG'
        : x < 1.0e+270 ? ( x / 1.0e+267 ).toPrecision(4) + ' HHHHH'
        : x < 1.0e+273 ? ( x / 1.0e+270 ).toPrecision(4) + ' IIIII'
        : x < 1.0e+276 ? ( x / 1.0e+273 ).toPrecision(4) + ' JJJJJ'
        : x < 1.0e+279 ? ( x / 1.0e+276 ).toPrecision(4) + ' KKKKK'
        : x < 1.0e+282 ? ( x / 1.0e+279 ).toPrecision(4) + ' LLLLL'
        : x < 1.0e+285 ? ( x / 1.0e+282 ).toPrecision(4) + ' MMMMM'
        : x < 1.0e+288 ? ( x / 1.0e+285 ).toPrecision(4) + ' NNNNN'
        : x < 1.0e+291 ? ( x / 1.0e+288 ).toPrecision(4) + ' OOOOO'
        : x < 1.0e+294 ? ( x / 1.0e+291 ).toPrecision(4) + ' PPPPP'
        : x < 1.0e+297 ? ( x / 1.0e+294 ).toPrecision(4) + ' QQQQQ'
        : x < 1.0e+300 ? ( x / 1.0e+297 ).toPrecision(4) + ' RRRRR'
        : x < 1.0e+303 ? ( x / 1.0e+300 ).toPrecision(4) + ' SSSSS'
        : x < 1.0e+306 ? ( x / 1.0e+303 ).toPrecision(4) + ' TTTTT'
        : ( x / 1.0e+306 ).toPrecision(4) + ' UUUUU'        
    );
}

function sToTime( seconds ){
    var hh = Math.floor( seconds / 60 / 60 )
    , mm = Math.floor( ( seconds - ( hh * 60 * 60 ) ) / 60 )
    , ss = Math.floor( ( seconds - ( hh * 60 * 60 ) - ( mm * 60 ) ) )
    , output = ''
    if( hh.length < 2 ){ ( hh = '00' + hh ).slice(-2) }
    else{ hh = commaNumber( hh ) };
    mm = ( '0' + mm ).slice(-2);
    ss = ( '0' + ss ).slice(-2);
    output = hh + ':' + mm + ':' + ss;
    return output;
}

function randBetween( x, y ){
    var delta = y - x + 1;
    var output = Math.floor( Math.random() * delta ) + x;
    return output;
}

function howSoonIsNow(){
    var dateTimeNow = new Date().getTime();
    return dateTimeNow;
}