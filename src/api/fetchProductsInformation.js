import ProductsInformation from '../data.json'

const fetchProductsInformation = async () => {
    // Simulate network request
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductsInformation)
        }, 1000) // Simulate delay

    })
}

export { fetchProductsInformation }