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

      //prevent duplicate player names
      if (
        players.filter((player) => {
          return player.name === newPlayer.name;
        }).length < 1
      ) {
        setPlayers([...players, newPlayer]);
      }
      playerInput.current.value = "";
    }
  };
  const removePlayer = (name: string) => {
    setPlayers(players.filter((player) => player.name !== name));
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
          return (
            <li key={player.name} onClick={() => removePlayer(player.name)}>
              {player.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
