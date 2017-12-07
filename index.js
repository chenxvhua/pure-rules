/**
 * @title 输入数字验证
 * @param intAmount  整数最多多少位
 * @param digitsAmount 小数位最多多少位
 * @param str 待验证字符串
 * @msg 请输入最多{intAmount}位整数，最多{digitsAmount}位小数的数值
 */
function inputNumberRange(intAmount, digitsAmount,str) {
    var regex = new RegExp("^(\\d{1,"+intAmount+"})$|^(\\d{1,"+intAmount+"}\\.\\d{1,"+digitsAmount+"})$");
    return regex.test(str)
}

module.exports ={
    inputNumberRange:inputNumberRange
};