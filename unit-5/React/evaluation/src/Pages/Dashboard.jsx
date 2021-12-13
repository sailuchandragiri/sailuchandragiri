import React from "react";
import data from "../data.json";

export const Dashboard=()=>{


    /*useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((prod)=>{
                setItems(prod);
            })
    },[])*/
    return(
        <div className="dashboard">
            {data.products.map((product)=>(
                <div className="lay">
                    <div className='lay'>
                        <div><img src={product.image}></img></div>
                        <button>Add to cart</button>
                    </div>
                </div>
            ))}
           
        </div>
    );
}