//////// 在這裡寫你的答案 /////////
function toRoman(number) {
  //先設計資料結構，把數字放進 array 或 object，再開始想演算法。
  //羅馬數字基本數字 : I(1)，V(5)，X(10)，L(50)，C(100)，D(500)，M(1000)
  //羅馬數字特殊規則數字 : IV(4)，IX(9)，XL(40)，XC(90)，CD(400)，CM(900)
  const romanNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanSymbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  //最後輸出結果先定義一個空的字串
  let changeResult = ''

  //直接去遍歷romanNumerals陣列，從1000、900、500.......4、1
  for (i = 0; i < romanNumerals.length; i++) {

    //如果丟進函式的數字大於romanNumerals，就把changeResult加入對應的romanSymbol並減掉轉換過的數字
    while (romanNumerals[i] <= number) {
      changeResult += romanSymbol[i]
      number -= romanNumerals[i]
    }
  }

  return changeResult
}

//console.log(toRoman(3459)) //測試迴圈轉換邏輯是否成功
//第一次(for) 第一次(while) : 1000 <= 3459 ， 輸入結果: M ， 3459-1000
//第一次(for) 第二次(while) : 1000 <= 2459 ， 輸入結果: MM ， 2459-1000
//第一次(for) 第三次(while) : 1000 <= 1459 ， 輸入結果: MMM ， 1459-1000
//第四次(for) 第一次(while) : 400 <= 459 ， 輸入結果: MMMCD ， 459-400
//第七次(for) 第一次(while) : 50 <= 59 ， 輸入結果: MMMCDL ， 59-50
//第十次(for) 第一次(while) : 9 <= 9 ， 輸入結果: MMMCDLIX ， 9-9
//結束迴圈，輸出結果

//////// 以下是測試程式，請勿更動 /////////
const expect = (name, value, result) => {
  if (value === result) { return true; }

  throw new Error(`${name} failed successfully`);
};

expect('toRoman(1)', toRoman(1), 'I');
expect('toRoman(2)', toRoman(2), 'II');
expect('toRoman(3)', toRoman(3), 'III');
expect('toRoman(4)', toRoman(4), 'IV');
expect('toRoman(5)', toRoman(5), 'V');
expect('toRoman(6)', toRoman(6), 'VI');
expect('toRoman(9)', toRoman(9), 'IX');
expect('toRoman(10)', toRoman(10), 'X');
expect('toRoman(27)', toRoman(27), 'XXVII');
expect('toRoman(48)', toRoman(48), 'XLVIII');
expect('toRoman(59)', toRoman(59), 'LIX');
expect('toRoman(93)', toRoman(93), 'XCIII');
expect('toRoman(141)', toRoman(141), 'CXLI');
expect('toRoman(150)', toRoman(150), 'CL');
expect('toRoman(163)', toRoman(163), 'CLXIII');
expect('toRoman(402)', toRoman(402), 'CDII');
expect('toRoman(575)', toRoman(575), 'DLXXV');
expect('toRoman(911)', toRoman(911), 'CMXI');
expect('toRoman(1024)', toRoman(1024), 'MXXIV');
expect('toRoman(1050)', toRoman(1050), 'ML');
expect('toRoman(1500)', toRoman(1500), 'MD');
expect('toRoman(1505)', toRoman(1505), 'MDV');
expect('toRoman(3000)', toRoman(3000), 'MMM');

console.log('all pass!');