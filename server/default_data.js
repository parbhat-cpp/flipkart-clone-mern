import { products } from './constants/data.js';
import Product from './model/product_schema.js';

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log('data imported successfully');
    } catch (err) {
        console.log(err.message);
    }
}

export default DefaultData;