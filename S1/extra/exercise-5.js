const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302}
,{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}]


let total = 0

for(let i = 0; i < products.length; i++) {
    let suma = products[i].sellCount
    total += suma
}

console.log(total);


let media = total / products.length;

console.log(media)