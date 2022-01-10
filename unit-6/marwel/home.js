var timerid;
let movie_div = document.getElementById("main");
let character = document.getElementById("temp");
let backgroundImage = document.getElementById("marvellogo");
character.style.width = "550px";
character.style.height = "100%";
character.style.margin = "auto";
character.style.marginTop = "100px";

async function main() {
  let name = document.getElementById("query").value;
  let main = await searchMovies(name);
  if (main === undefined) {
    return false;
  }
  appendMovies(main);
}

function appendMovies(n) {
  movie_div.innerHTML = null;
  document.getElementById("query").addEventListener("click", function () {
    document.getElementById("main").style.display = "block";
  });
  n.forEach((e) => {
    let p = document.createElement("p");
    p.innerHTML = e.name;
    movie_div.append(p);
    p.onclick = () => {
      prints(e.name, e.description);
    };
    p.onmouseover = () => {
      p.style.color = "#FF5722";
    };
    p.onmouseout = () => {
      p.style.color = "white";
    };
  });
}

function prints(name, data, image) {
  console.log(name,data);
  document.getElementById("main").style.display = "none";
  document.getElementById("query").style.display = "none";
  //document.getElementById("marvellogo").style.display = "none";
  document.getElementById("temp").style.border = "1px solid white";
  let div = document.createElement("div");
  div.style.margin = "10px auto 0px auto";
  div.style.width = "400px";
  div.style.fontSize = "30px";
  div.style.color = "#E91E63";

  let names = document.createElement("p");
  names.innerText = name;

  let datas = document.createElement("p");
  datas.innerText = data;

  div.append(names, datas);
  let btn = document.createElement("button");
  btn.innerText = "Go Back";
  btn.style.border = "none";
  btn.style.background = "#26C6DA";
  btn.style.color = "white";
  btn.style.marginLeft = "30%";
  btn.style.width = "150px";
  btn.style.height = "50px";
  btn.style.marginBottom = "20px";
  btn.onclick = () => {
    document.getElementById("main").style.display = "block";
    document.getElementById("query").style.display = "block";
    document.getElementById("temp").style.display = "none";
  };
  character.append(div, btn);
}

async function searchMovies(n) {
  try {
    let res = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${n}&apikey=5c1c8093e0943a61cd325e65e7cadb6b&hash=432441970b33138aaa8cf3f71db35837bc36e9c5`
    );
    let data = await res.json();
    console.log(data);
    return data.data.results;
  } catch (e) {
    alert("Error: " + e.message);
  }
}
function debounce(func, delay) {
  let name = document.getElementById("query").value;
  if (name.length < 3) {
    return false;
  }
  if (timerid) {
    clearTimeout(timerid);
  }
  timerid = setTimeout(() => {
    func();
  }, delay);

 
}

// let mysong = document.getElementById("mysong");
// let icon = document.getElementById("icon");
// icon.onclick = function () {
//   if (mysong.paused) {
//     mysong.play();
//     icon.src = "media/play.jpg";
//   } else {
//     mysong.pause();
//     icon.src = "media/pause.jpg";
//   }
// };

// const consmicbtn = document.getElementById("cosmicbtn");

// consmicbtn.onclick = function () {
//   window.location.href = "cosmics.html";
// };