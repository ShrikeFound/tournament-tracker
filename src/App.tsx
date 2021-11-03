import { FC, useRef, useState } from "react";
import "./App.css";

interface Player {
  name: string;
}

const App: FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const playerInput = useRef<HTMLInputElement>(null);
  const addPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerInput.current !== null) {
      const newPlayer = {
        name: playerInput.current.value,
      };
      setPlayers([...players, newPlayer]);
      playerInput.current.value = "";
    }
  };
  return (
    <div>
      <h1>Tournament Bracket Tracker</h1>
      <form className="card" onSubmit={addPlayer}>
        <input
          className="player-list-input"
          ref={playerInput}
          placeholder="player name"
        />
        <button type="submit">add player</button>
      </form>
      <ul className="player-list">
        {players?.map((player) => {
          return <li>{player.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
