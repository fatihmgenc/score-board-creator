import { Button, Input } from "reactstrap"
import { useDispatch } from "react-redux";
import { useState } from "react";

const PlayerInput = () => {
    const dispatch = useDispatch();

    const [playerName, setPlayerName] = useState("");
    const [playerScores, setPlayerScores] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    }
    const handleScoreChange = (event) => {
        setPlayerScore(parseInt(event.target.value));
    }
    const handleClickInit = () => {
        let data = playerScores.push(playerScore);
        setPlayerScores(data);
        handleClick();
        setPlayerScores([]);
        setPlayerName("");
        setPlayerScore(0);
    }
    const handleClick = () => {

        dispatch({
            type: 'ADD_PLAYER',
            payload: {
                name: playerName,
                scores: playerScores,
                id: Date.now().toString(),
            }


        })
        setPlayerScore(0);
    }
    return (
        <div className="playerInput" >
            <Input onChange={handleNameChange} placeholder="Name" value={playerName} type="text" />
            <Input onChange={handleScoreChange} placeholder="0" type="number" />
            <Button onClick={handleClickInit} >ADD Player</Button>
        </div>

    )
}
export default PlayerInput;