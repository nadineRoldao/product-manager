
// mock
let products = [{
    id: 1,
    name: 'Notebook MSI',
    category: 'eletronic',
    price: 10000.00,
    link: 'https://mdbootstrap.com/img/Photos/Others/placeholder7.webp'
},
{
    id: 2,
    name: 'Lapis',
    category: 'papelaria',
    price: 2.50,
    link: 'https://www.pergamopapelaria.com.br/mestre/envio/imagens/39799/Ecolapis_Grafite_Sparkle_FSC_SM%20SPK.jpg'
},
{
    id: 3,
    name: 'Jogo do Mario',
    category: 'games',
    price: 75.85,
    link: 'https://play-lh.googleusercontent.com/p7rx-TDw8mSXmnN5oreMbOrC6FTumoRsnz8rDxUHL6-7xYtLlzcyj1GS8UKyBx5eJg'
}]


function get(id) {
    return products.find(item => item.id == id)
}

function add(product) {
    const lastProduct = products[products.length -1]
    const nextId = !!lastProduct ? lastProduct.id + 1 : 1
    product.id = nextId
    products.push(product)
    return product
}

function update(product) {
    remove(product.id)
    products.push(product)
    products.sort((o1, o2) => o1.id - o2.id)
}

function remove(id) {
    products = products.filter(item => item.id != id)
}

function filter(filterObj = {}) {
    let filtered = products

    if (!Object.keys(filterObj).length)
        return filtered

    for (key in filterObj) {
        const filterValue = filterObj[key].toUpperCase()
        filtered = filtered.filter(item => item[key].toUpperCase().includes(filterValue))
    }

    return filtered
}


module.exports = {
    get,
    add,
    update,
    remove,
    filter
}
