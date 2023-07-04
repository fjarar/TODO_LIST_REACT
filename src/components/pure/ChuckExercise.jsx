import React, {useState, useEffect} from 'react';
import { getRandomJoke } from '../services/axiosChuckService';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckExercise = () => {
    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [unlike, setUnlike] = useState(0);

    useEffect(() => {
        obtainRandomJoke();
    }, []);

    const obtainRandomJoke = () => {
        getRandomJoke()
        .then((res)=>{
            //console.log(res)
            if (res.status === 200) {
                setJoke(res.data.value);
            }
        })
        .catch((error)=>{
            alert(`Something went wrong: ${error}`)
        })
    }

    const likeButton = (num) =>{
        setLike(like+num);
    }

    const unLikeButton = (num) =>{
        setUnlike(unlike+num)
    }

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <p>{joke}</p>
            <span><ThumbUpIcon onClick={()=>likeButton(1)} /></span>
            <span>  </span><ThumbDownIcon onClick={()=>unLikeButton(1)} /><br /><hr />
            <button onClick={obtainRandomJoke}>Get Random Joke</button>
            <p>QTY of Jokes that you like: {like}</p>
            <p>QTY of Jokes that you don't like: {unlike}</p>
        </div>
    );
}

export default ChuckExercise;
