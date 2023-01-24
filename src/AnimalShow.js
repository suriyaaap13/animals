import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg'
import horse from './images/horse.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}


function AnimalsShow({type, key}){
    return (
        <p>
            <img src={svgMap[type]} alt = 'animal'/>
            <img src={heart} alt = 'heart'/>
        </p>
    );
}

export default AnimalsShow;