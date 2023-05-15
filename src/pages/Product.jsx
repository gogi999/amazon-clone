import {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import { ProductDetails } from '../components';
import { callAPI } from '../utils/CallApi';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = () => {
        callAPI(`/data/products.json`).then((productResults) => {
            setProduct(productResults[id]);
        });
    }

    useEffect(() => {
        getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!product?.title) return <h1>Loading Product...</h1>

    return (product && 
        <div className="h-screen bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-500">
                <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-3 p-8 rounded bg-white m-auto">
                        <img src={`${product.image}`} alt="product-img" />
                    </div>
                    <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                        <div className="mb-3">
                            <ProductDetails 
                                product={product}
                                ratings={false}
                            />
                        </div>
                        <div></div>
                    </div>
                    <div className="col-span-2 bg-green-400">
                        Right
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
