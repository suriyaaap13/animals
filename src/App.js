import React, {useState} from 'react';
import './AnimalShow';
import AnimalsShow from './AnimalShow';
 
function App(){
    const [animals, setAnimals] = useState([]);
    
    function getRandomAnimal(){
        const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
        return animals[Math.floor(Math.random()*animals.length)];
    }

    function handleClick(){
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index)=>{
        return <AnimalsShow type = {animal} key = {index}/>
    })
    
    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
}
export default App;