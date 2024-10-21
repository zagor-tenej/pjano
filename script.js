let pijaniKontejner = document.getElementsByClassName("pjano-u-kontejner");

const folder = "./note/";

window.onload = () => 
{

  //17 dirki

  for (let i = 1; i <= 17; i++) 
  {
    let div = document.createElement("div");

    div.classList.add("dirka", i <= 7 ? "crna-dirka" : "bijela-dirka",i);
    pijaniKontejner[0].appendChild(div);
    
    div.addEventListener("click", () => 
    {
      new Audio(`${folder}dirka${i}.wav`).play();
        console.log(div.classList);
    });

  }

};
