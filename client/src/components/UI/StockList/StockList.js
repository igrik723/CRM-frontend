import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import StockItem from "../StockItem/StockItem";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStocks } from "../../../http/stockApi";
import { addStockAction } from "../../../store/action-creators/action-creators";

const StockList = () => {
    const stocks = useSelector(state => state.stock.stocks)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const stocksData = await fetchStocks()
                dispatch(addStockAction(stocksData))
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])
    return ( 
        <Row className='d-flex'>
            {stocks.map(stock => 
                <StockItem key={stock.id} stock={stock}/>
            )}
        </Row>
     );
}
 
export default StockList;