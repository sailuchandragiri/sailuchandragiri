

const page_div = document.getElementById("page");
const get_data= async()=>{
    let key = "CIKPUT8PO3XC";
    try{
        let response = await fetch(`https://g.tenor.com/v1/trending?key=${key}`)
        let { results: data } = await response.json();
        console.log(data);
        data.map((e)=>{
            const {itemurl,content_description}=e
            console.log(itemurl, content_description);
            let div = document.createElement("div");
            div.id = "santa";
            let a = document.createElement("a");
            a.href=itemurl;
            let image = document.createElement("img");
            image.src=e.media[0].gif.url;
            image.id="sa_img";
            let h3 = document.createElement("h3");
            h3.innerText=content_description;
           
            div.append(image,h3);
            page_div.append(div);
        }) 

    }catch(error){
        console.log(error.message);
    }
    
}

get_data();