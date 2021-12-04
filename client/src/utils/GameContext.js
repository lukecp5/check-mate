import React, { createContext, useContext, useState } from 'react';

// > Initialize new context for game context
const GameContext = createContext();

// > We create a custom hook to provide immediate usage of the game context value (game) in other components
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentGame, setCurrentGame] = useState(
      {
            name: "Risk"
      }
  );

  // > Function to set the selected game in the context
  const setGame = (game) => {
    // > Check if the user forgot to enter a name
    if (!game.gameName) {
      return;
    }
    let selectedGame = {"name": game.gameName};
    // > Update state with the game value selected by the user
    console.log(`Game sent from the component to the context: ${game.gameName}`);
    console.log(`Game sent from the component to the context: ${selectedGame}`);

    setCurrentGame(selectedGame);
  };

  return (
    <GameContext.Provider
      value={{ currentGame, setGame }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </GameContext.Provider>
  );
};