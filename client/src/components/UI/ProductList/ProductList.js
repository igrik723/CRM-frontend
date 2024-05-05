import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { Row } from "react-bootstrap";
import { fetchProducts } from "../../../http/shopApi";
import { addProductAction } from "../../../store/action-creators/action-creators";
import { fetchAccepts } from "../../../http/acceptApi";
import { addAcceptAction } from "../../../store/action-creators/action-creators";
import { useEffect } from "react";


const ProductList = () => {
    const products = useSelector(state => state.shop.products)
    const accepts = useSelector(state => state.accept.accepts)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await fetchProducts()
                dispatch(addProductAction(productsData))
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log(1)
    }, [products, accepts])

    return ( 
        <Row className='d-flex'>
            {products.map(product => 
                <ProductItem key={product.id} product={product}/>
            )}
        </Row>
     );
}
 
export default ProductList;