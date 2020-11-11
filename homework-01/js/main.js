const ORANGE = 15.678, MANGO = 123.965, AVOKADO = 90.2345;

const maxNumber = Math.max(ORANGE, MANGO, AVOKADO);
console.log(`Максимальна ціна - ${maxNumber}`)

const minNumber = Math.min(ORANGE, MANGO, AVOKADO);
console.log(`Мінімальна ціна - ${minNumber}`) 

const fruitsSum = ORANGE + MANGO + AVOKADO;
console.log(`Загальна сумма фруктів - ${fruitsSum}`)

const fruitCostWithoutPennies = Math.floor(ORANGE) + Math.floor(MANGO) + Math.floor(AVOKADO);
console.log(`Загальна сумма фруктів без копійок - ${fruitCostWithoutPennies}`)

const roundedSum = Math.round(fruitCostWithoutPennies / 100) * 100;
console.log(`Сума товарів округлена до сотень - ${roundedSum}`)

const isOdd = fruitCostWithoutPennies % 2 === 1;
console.log(`Cума товарів це парне число - ${isOdd}`)

const CUSTOMER_MONEY = 500;
const changeMoney = CUSTOMER_MONEY - fruitsSum;
console.log(`Решта - ${changeMoney}`)

const averageValue = Math.round(fruitsSum * 100) / 100;
console.log(`Cереднє значення округлене до сотих - ${averageValue}`)

const randomDiscount = Math.ceil(Math.random() * 100);
const roundedBill = +(fruitsSum - (fruitsSum * randomDiscount / 100)).toFixed(2)
console.log(`Рахунок заокруглений до сотих - ${roundedBill}`);

const trueCost = fruitsSum / 2;
const profit = trueCost - (fruitsSum * randomDiscount / 100);
console.log(`Чистий прибуток - ${profit}`);


console.log(`Максимальна ціна - ${Math.max(ORANGE, MANGO, AVOKADO)}
Мінімальна ціна - ${Math.min(ORANGE, MANGO, AVOKADO)}
Загальна сумма фруктів - ${ORANGE + MANGO + AVOKADO}
Загальна сумма фруктів без копійок - ${Math.floor(ORANGE) + Math.floor(MANGO) + Math.floor(AVOKADO)}
Сума товарів округлена до сотень - ${roundedSum}
Cума товарів це не парне число - ${fruitCostWithoutPennies % 2 === 1}
Решта - ${CUSTOMER_MONEY - fruitsSum}
Cереднє значення округлене до сотих - ${Math.round(fruitsSum * 100) / 100}
Рахунок заокруглений до сотих - ${+(fruitsSum - (fruitsSum * randomDiscount / 100)).toFixed(2)}
Чистий прибуток - ${(fruitsSum / 2) - (fruitsSum * randomDiscount / 100)}
`)