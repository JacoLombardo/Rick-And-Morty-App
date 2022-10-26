import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Character from './Character';
import './Components.css'

function Characters() {
    const [characters, setCharacters] = useState([]);


    const fetchCharacters = () => {
        const url = "https://rickandmortyapi.com/api/character";
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setCharacters(result.results);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchCharacters();
    }, []);







  return (
      <div className="flexCharacters">
          
        {characters &&
        characters.map((character) => {
            return <Character key={character.name} character={character} />;
        })}
          
    </div>
  )
}

export default Characters