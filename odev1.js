const radiusConsole=process.argv.slice(2);
console.log(radiusConsole);
function circleArea(radius){ 
    const area=Math.PI*(radius**2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
}

circleArea(radiusConsole*1);