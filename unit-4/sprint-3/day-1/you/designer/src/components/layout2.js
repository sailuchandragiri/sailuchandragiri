var style1 = {
  height:"50px",
  width:"50px",
  marginLeft:"150px",
  marginTop:"10px"
}


function Layout2(){
    return  <div id="layout2">
    <div><img id="img2" alt="another1" src="https://tse2.mm.bing.net/th?id=OIP.s2HO76ZYtNiZ87UpCPVEPwHaEc&pid=Api&P=0&w=279&h=168"/></div>
    <div id="head1">
       <div id="head11">
         <div><h1>Tortellini</h1></div>
         <div  id="firelogo"><img alt="anotr" style={style1} src="https://www.logolynx.com/images/logolynx/f8/f818134409ea8bc9c10d41aa7c8d394d.jpeg"/></div>
       </div>
       <div id="des">Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.</div>
       <div id="det">
         <div>270 Cal</div>
         <div>P/F/C: 18/4/41</div>
         <div>42.4 C</div>
       </div>
       <div id="foot">
         <div id="price">$17.90</div>
         <div id="disc">$22.90</div>
         <div><button id="btn">ORDER</button></div>
       </div>
     </div>
   </div>
}

export {Layout2};