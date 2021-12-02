async function getData(url){
    let res = await fetch(url)

    let data = await res.json()

    return data
}

function append(data, place){
    data.forEach((el) => {

      let div = document.createElement('div');

      let author_name = document.createElement('h3');
      
      let title_name = document.createElement('p');

      let desp = document.createElement('div');

      author_name.innerText = el.author;
      title_name.innerText = el.title;
      desp.innerText = el.description;

      div.append(author_name, title_name, desp);

      place.append(div);

    });
}
export{append, getData}