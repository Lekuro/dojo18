function dec2octal(dec){
    console.log('dec2octal() data:',dec,'result',(dec^0).toString(8))
    return (dec^0).toString(8)
}
//console.log('dec2octal')
console.log(dec2octal(31))
console.log(dec2octal(13))
console.log(dec2octal(6))
console.log(dec2octal(25))
console.log(dec2octal(8))
console.log(dec2octal(45))
console.log(dec2octal(10))
console.log(dec2octal(-9))
console.log(dec2octal(64))
console.log(dec2octal(255))
console.log('---------------------------------------------------')