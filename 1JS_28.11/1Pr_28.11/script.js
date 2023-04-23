let num = prompt("Enter number");
document.write(`1) ${num}^2 = ${num**2} <br>`);

let a = parseFloat(prompt("Enter a"));
let b = parseFloat( prompt("Enter b"));
document.write(`2) AVG(${a},${b}) = ${(a+b)/2}<br>`);

let side = prompt("Enter side of a square");
document.write(`3) S = ${side}^2 = ${side**2} <br>`);

const mile = 0.621371;
let km = prompt("Enter km");
document.write(`4) miles = ${km} * ${mile} = ${km*mile} <br>`)

let f = parseFloat(prompt("Enter first number"));
let s = parseFloat(prompt("Enter second number"));
document.write(`5)<br>${f} + ${s} = ${f+s}<br>`)
document.write(`${f} - ${s} = ${f-s}<br>`)
document.write(`${f} * ${s} = ${f*s}<br>`)
document.write(`${f} / ${s} = ${f/s}<br>`)

let a1 = parseFloat(prompt("Enter a"));
let b1 = parseFloat(prompt("Enter b"));
document.write(`6)<br>${a1}x + ${b1} = 0 <br>`)
document.write(`${a1}x = ${b1*-1} <br>`)
document.write(`x = ${b1/a1*-1} <br>`)

let hours = parseFloat(prompt("Enter hours"));
let min = parseFloat(prompt("Enter minutes"));
const allmin = 1440;
let allminleft = allmin - (hours*60+min);
let minleft = allminleft%60;
let hoursleft = (allminleft-minleft)/60;
document.write(`7) Time for next day: ${hoursleft} hours ${minleft} minutes <br>`);

let th = parseFloat(prompt("Enter three digit number"));
if(th>99&&th<1000)
{
    document.write(`8) ${Math.floor( (th % 100)/10)}<br>`);
}
else
{
    document.write("8) it's not three digit number<br>");
}

let ftstr = prompt("Enter five digit number");
let ft = parseFloat(ftstr);
if(ft>9999&&ft<100000)
{
    document.write(`9) ${ftstr[4]}`)
    for(x in ftstr)
    {
        if(x<4)
        document.write(ftstr[x]);
    }
    document.write("<br>");
}
else
{
    document.write("9) it's not five digit number<br>");
}

let sumofsells = parseFloat(prompt("Enter sum of sells"));
let salary = sumofsells/10+250;
document.write(`10) Your salary ${salary}`);