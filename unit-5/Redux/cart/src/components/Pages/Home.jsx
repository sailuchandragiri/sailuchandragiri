import axios from 'axios';
import {useState,useEffect} from 'react';
import {cartContext} from "../context/cartContext";
import {useContext} from "react";

let arr = []
export const Home = () => {
    const [cartdata,setCartdata] = useState([]);
    const [count,setCount] = useState(0);
    const {handleCart} = useContext(cartContext)
    const handleClick = (data) => {
        arr.push(data);
        handleCart(data);
    }
    useEffect(()=>{
        axios.get("http://localhost:3001/items").then((response) => {
        for(let i = 0; i < response.data.length; i++) {
            if(i=== 0)
            {
                setCartdata(response.data);
                break;
            }
        }
        })
    },[])
    return <div id="homepagelayout">
        {
            cartdata.map(e=><div key={e.productName} id="productLayout">
                <img className="productImage" src={e.image_url} alt={e.product_name} />
                <h4 className="productName">{`ProductName : ${e.product_name}`}</h4>
                <div id="counterlayout">
                    <table id="tablelayout">
                        <td className="tablelayout" onClick={()=>{setCount(count-1)}}> - </td>
                        <td className="tablelayout" >{count}</td>
                        <td className="tablelayout" onClick={()=>{setCount(count+1)}}> + </td>
                    </table>
                </div>
                <div className="productPrice">{`Product Price :  ${e.price}`}</div>
                <div className="productDescription">{`Product Description : ${e.description}`}</div>
                <button className="btnAdd" onClick={()=>{handleClick(e)}}>Add to Cart</button>
            </div>)
        }
    </div>
}
