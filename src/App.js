import Title from "./components/title";
import ScoreTable from "./components/scoreTable";
import PlayerInput from "./components/playerInput";
import LapInput from "./components/lapInput";

function App() {
  return (
    <div className="main" >
      <Title titleText="Welcome To EasyBoard" ></Title>
      <div class="tables" >
        <PlayerInput></PlayerInput>
        <LapInput></LapInput>
        <ScoreTable />
      </div>
    </div >
  );
}

export default App;
