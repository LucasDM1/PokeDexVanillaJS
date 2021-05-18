const templateCard = document.getElementById("template-card").content
const flex = document.querySelector(".flex")
const frag = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    const random = ran(1,151)
    fetchData(random)
})

const ran = (min, max) =>{
    return Math.floor(Math.random()*(max-min) + min)
}

const fetchData = async (id) =>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data =await res.json()
        
        pokemon={
            img:data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            xp: data.base_experience,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat
        }
        pintarCard(pokemon)
    }catch(error){
        console.error(error);
    }
}
const pintarCard = (pokemon) =>{
    console.log(pokemon);
    const clone = templateCard.cloneNode(true)
    
    clone.querySelector(".card-body-img").setAttribute("src", pokemon.img)
    clone.querySelector(".card-body-title").innerHTML= `${pokemon.nombre} <span>  ${pokemon.hp} HP </span>`
    clone.querySelector(".card-body-text").textContent = pokemon.xp +` Exp`
    clone.querySelectorAll(".card-footer-social h3")[0].textContent = pokemon.ataque
    clone.querySelectorAll(".card-footer-social h3")[1].textContent = pokemon.especial
    clone.querySelectorAll(".card-footer-social h3")[2].textContent = pokemon.defensa
    
    frag.appendChild(clone)
    flex.appendChild(frag)
}   