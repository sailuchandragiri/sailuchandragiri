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
                    <div className="layout">
                        <br/>

                        <div className="title">{product.title}</div> 
                        <br/>
                        <div className="image"><img className="img" src={product.image}></img></div>
                        <div className="price">Price: {product.price}/-</div>
                        <br/>
                        <div className="des"> {product.description}</div> 
                        <br/>
                        <br/>
                    <button>Add to cart</button>
                    <hr></hr>
                       
                    </div>
                </div>
            ))}
           
        </div>
    );
}