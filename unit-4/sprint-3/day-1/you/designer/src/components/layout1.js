var style1 = {
  height:"50px",
  width:"50px",
  marginLeft:"50px",
  marginTop:"10px"
}

function Layout1(){
    return <div id="layout1">
    <div><img id="img1" alt="another" src="https://tse3.mm.bing.net/th?id=OIP.AW1f76Ufpo8qa_hMyjazpgHaFF&pid=Api&P=0&w=248&h=171"/></div>
    <div id="head1">
      <div id="head11">
        <div><h1>Pepperoni Pizza</h1></div>
        <div id="firelogo"><img alt="anotr" style={style1} src="https://www.logolynx.com/images/logolynx/f8/f818134409ea8bc9c10d41aa7c8d394d.jpeg"/></div>
      </div>
      <div id="des">Premium pepperoni and cheese is made with real mozarella on original hand-tossed crust.</div>
      <div id="det">
        <div>265 Cal</div>
        <div>P/F/C: 12/10/31</div>
        <div>53.8 C</div>
      </div>
      <div id="foot">
        <div id="price">$23.90</div>
        <div id="disc">$29.90</div>
        <div><button id="btn">ORDER</button></div>
      </div>
    </div>
  </div>
}

export {Layout1};