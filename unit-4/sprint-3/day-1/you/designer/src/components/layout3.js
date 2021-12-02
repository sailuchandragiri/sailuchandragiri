var style1 = {
  height:"50px",
  width:"50px",
  marginLeft:"80px",
  marginTop:"10px"
}


function Layout3(){
    return <div id="layout3">
    <div><img  id="img3" alt="another3"src="https://tse3.mm.bing.net/th?id=OIP.Ev72Oc9h5HZjn6HK2DZClwHaLH&pid=Api&P=0&w=300&h=300"/></div>
    <div id="head1">
       <div id="head11">
         <div><h1>Strawberry Cake</h1></div>
         <div  id="firelogo"><img alt="anotr" style={style1} src="https://www.logolynx.com/images/logolynx/f8/f818134409ea8bc9c10d41aa7c8d394d.jpeg"/></div>
       </div>
       <div id="des">Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</div>
       <div id="det">
         <div>346 Cal</div>
         <div>P/F/C: 6/14/49</div>
         <div>13.9 C</div>
       </div>
       <div id="foot">
         <div id="price">$13.90</div>
         <div id="disc">$18.90</div>
         <div><button id="btn">ORDER</button></div>
       </div>
     </div>
    </div>
}

export {Layout3};