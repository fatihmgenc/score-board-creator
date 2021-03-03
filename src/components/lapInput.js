import { Button, Badge } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import PlayerLapScoreInput from "./playerLapScoreInput"
const LapInput = () => {
    const playerList = useSelector(state => state.playerList)
    const lapCount = useSelector(state => state.lapCount)
    const dispatch = useDispatch()

    const handleLapPrev = () => dispatch({
        type: 'UPDATE_LAP',
        payload: lapCount - 1,
    })
    const handleLapNext = () => dispatch({
        type: 'UPDATE_LAP',
        payload: lapCount + 1,
    })
    return (
        <div>
            <div className="lapInput" >
                <p style={{ fontSize: "24px" }} >
                    Current lap:
                     <Badge color="primary">{` ${lapCount}`}</Badge>
                </p>
                {playerList.map(p => {
                    if (p.scores.length > lapCount) {
                        return (<p></p>)
                    }
                    return (
                        <PlayerLapScoreInput key={p.id} player={p} lap={lapCount} />
                    )

                })}

            </div>
            <div style={{ marginBottom: "5px" }} >
                <Button outline color="success" size="lg" onClick={handleLapPrev}>Prev</Button>{' '}
                <Button outline color="success" size="lg" onClick={handleLapNext}>Next</Button>
            </div>

        </div>

    )
}
export default LapInput;