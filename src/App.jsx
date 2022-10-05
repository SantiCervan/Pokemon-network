import { useRef, useCallback, useEffect, useState } from 'react';
import { pokemone, linkPokemons } from './pokemonFunctions'
import ForceGraph3D from 'react-force-graph-3d';
import Filter from './Filter'
import logo from './img/logo2.png'
import './App.css'

export default function App() {

  const [json, setJson] = useState({
    "nodes": [
      { "id": "pokemons", "group": "pokemons" },
      { "id": "normal", "group": "normal" },
      { "id": "fighting", "group": "fighting" },
      { "id": "flying", "group": "flying" },
      { "id": "poison", "group": "poison" },
      { "id": "ground", "group": "ground" },
      { "id": "rock", "group": "rock" },
      { "id": "bug", "group": "bug" },
      { "id": "ghost", "group": "ghost" },
      { "id": "steel", "group": "steel" },
      { "id": "fire", "group": "fire" },
      { "id": "water", "group": "water" },
      { "id": "grass", "group": "grass" },
      { "id": "electric", "group": "electric" },
      { "id": "psychic", "group": "psychic" },
      { "id": "ice", "group": "ice" },
      { "id": "dragon", "group": "dragon" },
      { "id": "dark", "group": "dark" },
      { "id": "fairy", "group": "fairy" },
      { "id": "unknown", "group": "unknown" },
      { "id": "shadow", "group": "shadow" },
    ], "links": [
      { "source": "pokemons", "target": "normal" },
      { "source": "pokemons", "target": "fighting" },
      { "source": "pokemons", "target": "flying" },
      { "source": "pokemons", "target": "poison" },
      { "source": "pokemons", "target": "ground" },
      { "source": "pokemons", "target": "rock" },
      { "source": "pokemons", "target": "bug" },
      { "source": "pokemons", "target": "ghost" },
      { "source": "pokemons", "target": "steel" },
      { "source": "pokemons", "target": "fire" },
      { "source": "pokemons", "target": "water" },
      { "source": "pokemons", "target": "grass" },
      { "source": "pokemons", "target": "electric" },
      { "source": "pokemons", "target": "psychic" },
      { "source": "pokemons", "target": "ice" },
      { "source": "pokemons", "target": "dragon" },
      { "source": "pokemons", "target": "dark" },
      { "source": "pokemons", "target": "fairy" },
      { "source": "pokemons", "target": "unknown" },
      { "source": "pokemons", "target": "shadow" }

    ]
  })

  useEffect(() => {
    pokemone.map(p => {
      setJson(({ nodes, links }) => {
        return {
          nodes: [...nodes, { "id": p.name, "group": p.type[0] }],
          links: [...links, linkPokemons(p)]
        }
      })
    })
  }, [])

  //------------------------------------------------------------------------------------------------------------------

  const extraRenderers = [new THREE.CSS2DRenderer()];
  const fgRef = useRef();

  const handleClick = useCallback(node => {
    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  }, [fgRef]);

  return (
    <div>
      <div className="h1containmer">
        <img src={logo} className="logo" />
        <h1>POKÉMON /</h1>
        <h2> NETWORK</h2>
      </div>
      <ForceGraph3D ref={fgRef}
        graphData={json}
        nodeLabel="id"
        nodeAutoColorBy="group"
        onNodeClick={handleClick}
        extraRenderers={extraRenderers}
        nodeThreeObject={node => {
          const nodeEl = document.createElement('div');
          nodeEl.textContent = node.id;
          nodeEl.style.color = node.color;
          nodeEl.className = 'node-label';
          return new THREE.CSS2DObject(nodeEl);
        }}
        nodeThreeObjectExtend={true}
      />
      <Filter />
    </div>
  )
}