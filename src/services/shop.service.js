// import Axios from 'axios'
// const BASE_URL = (process.env.NODE_ENV === 'production')
//     ? '/api/toy/'
//     : '//localhost:3030/api/toy/';


// var axios = Axios.create({
//     withCredentials: true
// })


export const shopService = {
    query,
    getById,
    save,
    remove,
    getShop
}

const gShop = require('../data/products.json')

async function query(filterBy) {
    try {
        // const res = await axios.get(BASE_URL, { params: { filterBy } })
        // return res.data
        if (filterBy.select) {
            switch (filterBy.select) {
                case 'Gap':
                    return
                    break;

                default:
                    break;
            }
        }

        if (filterBy.budget) {

        }

        if (filterBy.name) {

        }
        console.log('filterBy', filterBy);
        return gShop.Stores
    } catch (err) {
        console.log(err)
    }
}

function getShop() {
    return gShop
}

async function getById(productId) {
    // try {
    //     // const res = await axios.get(BASE_URL + toyId)
    //     // return res.data
    // } catch (err) {
    //     console.log(err)
    // }
}

async function remove(productId) {
    // try {
    //     // const res = await axios.delete(BASE_URL + toyId)
    //     // return res.data
    // } catch (err) {
    //     console.log(err.message)
    // }
}

async function save(product) {
    // try {
    //     if (product._id) {
    //         const res = await axios.put(BASE_URL + product._id, product)
    //         return res.data
    //     } else {
    //         const res = await axios.post(BASE_URL, product)
    //         return res.data
    //     }
    // } catch (err) {
    //     console.log(err)
    // }
}

