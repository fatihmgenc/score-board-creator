import React from "react";
import { Table } from 'reactstrap';
import "../dist/css/main.css";
import { useSelector, connect } from "react-redux";




const ScoreTable = (props) => {
    const { playerList } = props
    const calculateTotal = (player) => {
        let total = 0;
        for (var i in player.scores) { total += player.scores[i]; }
        console.log(total, "calc")
        return total;
    }
    return (
        <div className="scoreTable">
            <Table responsive striped bordered >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList?.sort((a, b) => (calculateTotal(a) > calculateTotal(b)) ? -1 : 1).map((p, j) => {
                        let total = 0;
                        for (var i in p.scores) { total += p.scores[i]; }
                        return (
                            <tr key={p.id} style={j === 0 ? { color: "red" } : {}} >
                                <th key={p.id} scope="row">{j + 1}</th>
                                <td > {p.name}</td>
                                <td  >{total}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        playerList: state.playerList,
    }
}
export default connect(mapStateToProps)(ScoreTable)