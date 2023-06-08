const apple = 15.678;
const banana = 123.965;
const coconut = 90.2345;

const maxprice = Math.max(apple, banana, coconut);
const minprice = Math.min(apple, banana, coconut);

console.log(`Максимальна ціна: ${maxprice}`);
console.log(`Мінімальна ціна: ${minprice}`);

const sumproducts = apple + banana + coconut;
console.log(`Сума до сплати: ${sumproducts}`);

const allfloor = Math.floor(apple) + Math.floor(banana) + Math.floor(coconut);
console.log(`Заокруглена сума до меншого: ${allfloor}`);

const allround100 = Math.round(sumproducts /100) *100;
console.log(`Заокруглена сума до сотень: ${allround100}`);

const isEven = Math.floor(sumproducts) % 2 === 0;
console.log(isEven);

const residual500 = 500 - sumproducts;
console.log(`Решта, якщо клієнт платить 500: ${residual500}`);

const middleprice = ( sumproducts/3 ).toFixed(2);
console.log( `Середнє арифметичне заокруглене до двох знаків: ${middleprice}`);

const randomsale = (Math.random().toFixed(1))*100; //рандомна знижка
const pricesale = (sumproducts - (sumproducts * randomsale / 100)).toFixed(2); //округлена сума до оплати зі знижкою

const profit = ((sumproducts / 2) - (randomsale * sumproducts)/100).toFixed(2); //прибуток

console.log(`Рандомна знижка: ${randomsale}%`);
console.log(`Округлена сума до оплати зі знижкою: ${pricesale}`);
console.log(`Прибуток: ${profit}`);

console.log(`Максимальна ціна: ${maxprice}; Мінімальна ціна: ${minprice}; Сума до сплати: ${sumproducts}; Заокруглена сума до меншого: ${allfloor}; Заокруглена сума до сотень: ${allround100} ; Парне чи непарне: ${isEven}; Решта, якщо клієнт платить 500: ${residual500}; Середнє арифметичне заокруглене до двох знаків: ${middleprice}; Рандомна знижка: ${randomsale}%; Округлена сума до оплати зі знижкою: ${pricesale}; Прибуток: ${profit}` )