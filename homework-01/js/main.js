const orange = 15.678;
const mango = 123.965;
const avokado = 90.2345;

const maxNumber = Math.max(orange, mango, avokado);
console.log(`Максимальна ціна - ${maxNumber}`)

const minNumber = Math.min(orange, mango, avokado);
console.log(`Мінімальна ціна - ${minNumber}`) 

const fruitsSum = orange + mango + avokado;
console.log(`Загальна сумма фруктів - ${fruitsSum}`)

const fruitCostWithoutPennies = Math.floor(orange) + Math.floor(mango) + Math.floor(avokado);
console.log(`Загальна сумма фруктів без копійок - ${fruitCostWithoutPennies}`)

const roundedSum = Math.round(fruitCostWithoutPennies / 100) * 100;
console.log(`Сума товарів округлена до сотень - ${roundedSum}`)

const isOdd = fruitCostWithoutPennies % 2 === 1;
console.log(`Cума товарів це парне число - ${isOdd}`)

const CUSTOMER_MONEY = 500;
const changeMoney = CUSTOMER_MONEY - fruitsSum;
console.log(`Решта - ${changeMoney}`)

const averageValue = +(fruitsSum / 3).toFixed(2);
console.log(`Cереднє значення округлене до сотих - ${averageValue}`)

const minDiscount = 0;
const maxDiscount = 100;
const randomDiscount = Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;
const roundedBill = +(fruitsSum - (fruitsSum * randomDiscount / 100)).toFixed(2)
console.log(`Рахунок заокруглений до сотих - ${roundedBill}`);

const trueCost = fruitsSum / 2;
const profit = trueCost - (fruitsSum * randomDiscount / 100);
console.log(`Чистий прибуток - ${profit}`);


console.log(`Максимальна ціна - ${maxNumber}
Мінімальна ціна - ${minNumber}
Загальна сумма фруктів - ${fruitsSum}
Загальна сумма фруктів без копійок - ${fruitCostWithoutPennies}
Сума товарів округлена до сотень - ${roundedSum}
Cума товарів це не парне число - ${isOdd}
Решта - ${changeMoney}
Cереднє значення округлене до сотих - ${averageValue}
Рахунок заокруглений до сотих - ${roundedBill}
Чистий прибуток - ${profit}
`)