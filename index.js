const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  }
  
  const url = ' https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('card');
const button = document.getElementById('btn');


let getPokeData  = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data)  => generateCard(data));
    
    
}

 let generateCard =(data) =>{
    console.log(data)
     const hp = data.stats[0].base_stat;
     const imgSrc = data.sprites.front_default;
     const pokeName = data.name.toUpperCase();
     const statAttack = data.stats[1].base_stat;
     const statDefense = data.stats[2].base_stat;
     const statSpeed = data.stats[5].base_stat;
       
const themeColor = typeColor[data.types[0].type.name]
  



     card.innerHTML =  `
     
     <p class="hp">
         <span>${hp}</span>
    </p>
      <img src="${imgSrc}" alt='pokemon' >
     <h2 class="pokemon-name">${pokeName}</h2>
<div id="types">

</div>
<div class="stats">
     <div>
         <h3>${statAttack}</h3>
         <p>Attack</p>
     </div>
     <div>
         <h3>${statDefense}</h3>
         <p>Defense</p>
     </div>
     <div>
         <h3>${statSpeed}</h3>
         <p>Speed</p>
</div>
 </div>

     
     
     
     
     
     

     
     `;
     appendTypes(data.types)
     styleCard(themeColor )
    
   
 
 };


 let appendTypes  = (types) => {
    types.forEach((item) =>{
        let span = document.createElement('SPAN');
        span.textContent = item.type.name;
        document.getElementById("types").appendChild(span)
    })
};
let styleCard = (color) => {
    card.style.background = ` radial-gradient(circle at 50% 0% , 
        ${color} 36% , #ffffff 36%)`
    }

 button.addEventListener('click' , getPokeData);
window.addEventListener("load" , getPokeData)

