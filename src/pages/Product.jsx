import {
  useEffect,
  useState,
} from 'react';

import { useDispatch } from 'react-redux';
import {
  Link,
  useParams,
} from 'react-router-dom';

import { ProductDetails } from '../components';
import { addToCart } from '../redux/cartSlice';
import { callAPI } from '../utils/CallApi';
import { EURO_CURRENCY } from '../utils/constants';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState('1');
    const dispatch = useDispatch();

    const getProduct = () => {
        callAPI(`/data/products.json`).then((productResults) => {
            setProduct(productResults[id]);
        });
    }

    const addQuantityToProduct = () => {
        setProduct(product.quantity = quantity);
        return product;
    }

    useEffect(() => {
        getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!product?.title) return <h1>Loading Product...</h1>

    return (product && 
        <div className="h-screen bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
                <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-3 p-8 rounded bg-white m-auto">
                        <img src={`${product.image}`} alt="product-img" />
                    </div>
                    <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                        <div className="mb-3">
                            <ProductDetails 
                                product={product}
                                ratings={true}
                            />
                        </div>
                        <div className="text-base xl:text-lg mt-3">
                            {product.description}
                        </div>
                    </div>
                    <div className="col-span-2 p-4 rounded bg-white">
                        <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                            {EURO_CURRENCY.format(product.price)}
                        </div>
                        <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                            RRP: <span className="line-through">
                                {EURO_CURRENCY.format(product.oldPrice)}
                            </span>
                        </div>
                        <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                            FREE Returns
                        </div>
                        <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                            FREE Delivery
                        </div>
                        <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                            In Stock
                        </div>
                        <div className="text-base xl:text-lg mt-1">Quantity:
                            <select 
                                className="p-2 bg-white border rounded-md focus:border-indigo-600"
                                onChange={(e) => setQuantity(e.target.value)}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <Link to={"/checkout"}>
                            <button 
                                className="btn"
                                onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                            >
                                Add to Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
