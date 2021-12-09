import {cartContext} from "../context/cartContext";
import {useContext} from 'react';


const tableLayout = {
   border: "1px solid black",
   margin:"auto"
}


const trStyle={
   border: "1px solid black"
}
export const Cart = () => {
   const data = useContext(cartContext);
   console.log(data);
   const total = data.data.price;
   return (<div>
         Welcome to the Cart Page
         <div>{data.data.product_name}</div>
         <table style={tableLayout}>
            <tr style={trStyle}>
            <td>{data.data.id}</td>
            <td>{data.data.product_name}</td>
            <td>{data.data.price}</td>
            </tr>
            <tr>
               <td style={{textAlign: 'center'}}>{`Totals Amount : ${total}`}</td>
            </tr>
         </table>
   </div>)
}