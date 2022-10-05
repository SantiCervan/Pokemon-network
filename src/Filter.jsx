import React from 'react'
import bug from "./img/bug.png";
import dark from "./img/dark.png";
import dragon from "./img/dragon.png";
import electric from "./img/electric.png";
import fairy from "./img/fairy.png";
import fighting from "./img/fighting.png";
import fire from "./img/fire.png";
import flying from "./img/flying.png";
import ghost from "./img/ghost.png";
import grass from "./img/grass.png";
import ground from "./img/ground.png";
import ice from "./img/ice.png";
import normal from "./img/normal.png";
import poison from "./img/poison.png";
import psychic from "./img/psychic.png";
import rock from "./img/rock.png";
import shadow from "./img/shadow.png";
import steel from "./img/steel.png";
import unknow from "./img/unknow.png";
import water from "./img/water.png";


const Filter = () => {
    return (
        <div className="filterContainer">
            <h2 className="title">Pokémon types:</h2>
            <div className="buttonsContainer">
                <div className="typesButton">
                    <img src={normal} alt="normal" className="types" />
                    <p>normal</p>
                </div>
                <div className="typesButton">
                    <img src={bug} alt="bug" className="types" />
                    <p>bug</p>
                </div>
                <div className="typesButton">
                    <img src={dragon} alt="dragon" className="types" />
                    <p>dragon</p>
                </div>
                <div className="typesButton">
                    <img src={electric} alt="electric" className="types" />
                    <p>electric</p>
                </div>
                <div className="typesButton">
                    <img src={fairy} alt="fairy" className="types" />
                    <p>fairy</p>
                </div>
                <div className="typesButton">
                    <img src={fighting} alt="fighting" className="types" />
                    <p>fighting</p>
                </div>
                <div className="typesButton">
                    <img src={fire} alt="fire" className="types" />
                    <p>fire</p>
                </div>
                <div className="typesButton">
                    <img src={water} alt="water" className="types" />
                    <p>water</p>
                </div>
                <div className="typesButton">
                    <img src={flying} alt="flying" className="types" />
                    <p>flying</p>
                </div>
                <div className="typesButton">
                    <img src={grass} alt="grass" className="types" />
                    <p>grass</p>
                </div>
                <div className="typesButton">
                    <img src={ghost} alt="ghost" className="types" />
                    <p>ghost</p>
                </div>
                <div className="typesButton">
                    <img src={ground} alt="ground" className="types" />
                    <p>ground</p>
                </div>
                <div className="typesButton">
                    <img src={ice} alt="ice" className="types" />
                    <p>ice</p>
                </div>
                <div className="typesButton">
                    <img src={poison} alt="poison" className="types" />
                    <p>poison</p>
                </div>
                <div className="typesButton">
                    <img src={steel} alt="steel" className="types" />
                    <p>steel</p>
                </div>
                <div className="typesButton">
                    <img src={rock} alt="rock" className="types" />
                    <p>rock</p>
                </div>
                <div className="typesButton">
                    <img src={dark} alt="dark" className="types" />
                    <p>dark</p>
                </div>
                <div className="typesButton">
                    <img src={psychic} alt="psychic" className="types" />
                    <p>psychic</p>
                </div>
                <div className="typesButton">
                    <img src={shadow} alt="shadow" className="types" />
                    <p>shadow</p>
                </div>
                <div className="typesButton">
                    <img src={unknow} alt="unknow" className="types" />
                    <p>unknow</p>
                </div>
            </div>
        </div>
    )
}

export default Filter
