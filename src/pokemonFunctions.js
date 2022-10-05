import axios from 'axios'

async function getPokemons() {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        const { results } = await resp.json()
        const urls = results.map(p => p.url)
        const promesas = urls.map(u => axios.get(u))
        const resultado = await Promise.all(promesas)
        const pokemone = resultado.map(e => {
            const pokes = {
                id: e.data.id,
                name: e.data.name,
                type: e.data.types.map(obj => (obj.type.name)),
                img: e.data.sprites.front_default,
            }
            return pokes
        })
        return pokemone
    } catch (err) {
        console.log(err);
    }
}

export function linkPokemons(p) {
    if (p.type.length > 1) {
        switch (p.type[0]) {
            case "normal":
                return { "source": p.name, "target": "normal" }
            case "fighting":
                return { "source": p.name, "target": "fighting" }
            case "flying":
                return { "source": p.name, "target": "flying" }
            case "poison":
                return { "source": p.name, "target": "poison" }
            case "ground":
                return { "source": p.name, "target": "ground" }
            case "rock":
                return { "source": p.name, "target": "rock" }
            case "bug":
                return { "source": p.name, "target": "bug" }
            case "ghost":
                return { "source": p.name, "target": "ghost" }
            case "steel":
                return { "source": p.name, "target": "steel" }
            case "fire":
                return { "source": p.name, "target": "fire" }
            case "water":
                return { "source": p.name, "target": "water" }
            case "grass":
                return { "source": p.name, "target": "grass" }
            case "electric":
                return { "source": p.name, "target": "electric" }
            case "psychic":
                return { "source": p.name, "target": "psychic" }
            case "ice":
                return { "source": p.name, "target": "ice" }
            case "dragon":
                return { "source": p.name, "target": "dragon" }
            case "dark":
                return { "source": p.name, "target": "dark" }
            case "fairy":
                return { "source": p.name, "target": "fairy" }
            case "shadow":
                return { "source": p.name, "target": "shadow" }
            default:
                return { "source": p.name, "target": "unknown" }
        }

    } else {
        switch (p.type[0]) {
            case "normal":
                return { "source": p.name, "target": "normal" }
            case "fighting":
                return { "source": p.name, "target": "fighting" }
            case "flying":
                return { "source": p.name, "target": "flying" }
            case "poison":
                return { "source": p.name, "target": "poison" }
            case "ground":
                return { "source": p.name, "target": "ground" }
            case "rock":
                return { "source": p.name, "target": "rock" }
            case "bug":
                return { "source": p.name, "target": "bug" }
            case "ghost":
                return { "source": p.name, "target": "ghost" }
            case "steel":
                return { "source": p.name, "target": "steel" }
            case "fire":
                return { "source": p.name, "target": "fire" }
            case "water":
                return { "source": p.name, "target": "water" }
            case "grass":
                return { "source": p.name, "target": "grass" }
            case "electric":
                return { "source": p.name, "target": "electric" }
            case "psychic":
                return { "source": p.name, "target": "psychic" }
            case "ice":
                return { "source": p.name, "target": "ice" }
            case "dragon":
                return { "source": p.name, "target": "dragon" }
            case "dark":
                return { "source": p.name, "target": "dark" }
            case "fairy":
                return { "source": p.name, "target": "fairy" }
            case "shadow":
                return { "source": p.name, "target": "shadow" }
            default:
                return { "source": p.name, "target": "unknown" }
        }
    }
}

export const pokemone = await getPokemons()

//---------------------------------------------------------------------------------

// import axios from 'axios'

// export async function getPokemons() {
//     try {
//         const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
//         const { results } = await resp.json()
//         const urls = results.map(p => p.url)
//         const promesas = urls.map(u => axios.get(u))
//         const resultado = await Promise.all(promesas)
//         const pokemone = resultado.map(e => {
//             const pokes = {
//                 id: e.data.id,
//                 name: e.data.name,
//                 type: e.data.types.map(obj => (obj.type.name)),
//                 img: e.data.sprites.other.dream_world.front_default,
//             }
//             return pokes
//         })
//         return pokemone
//     } catch (err) {
//         console.log(err);
//     }
// }