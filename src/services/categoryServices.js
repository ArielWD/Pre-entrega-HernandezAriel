import axios from 'axios'

export async function getCategory() {
    return await axios.get('https://dummyjson.com/products/categories')
}