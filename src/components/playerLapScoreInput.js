import { Button } from 'reactstrap';
import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'reactstrap';


const PlayerLapScoreInput = ({ player, lap }) => {

    const dispatch = useDispatch()
    const lapCount = lap
    const { name, id, scores } = player;
    const [score, setScore] = useState(scores.length >= lapCount ? scores[lapCount] : 0)

    const handleChange = (event) => {
        setScore(event.target.value)
    }

    const handleRemovePlayer = (event) => {
        dispatch({
            type: 'REMOVE_PLAYER',
            payload: id
        })

    }

    const handleSaveScorePlayer = (event) => {

        dispatch({
            type: 'UPDATE_PLAYER_SCORE',
            payload: {
                score: score,
                id: id
            }
        })
        setScore(0);
    }

    return (
        <div>
            <Input placeholder={`${name}'s score `} onChange={handleChange} value={score} type="number" ></Input>
            <Button onClick={handleRemovePlayer}>Remove</Button>
            <Button onClick={handleSaveScorePlayer}>add</Button>
        </div>
    )

}

export default PlayerLapScoreInput
