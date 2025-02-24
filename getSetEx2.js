const team = {
  _players: [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
    { firstName: "Mike", lastName: "Johnson", age: 28 }
  ],
  _games: [
    { opponent: "Sharks", teamPoints: 90, opponentPoints: 85 },
    { opponent: "Bears", teamPoints: 78, opponentPoints: 80 },
    { opponent: "Lions", teamPoints: 102, opponentPoints: 95 }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    const player = { firstName: newFirstName, lastName: newLastName, age: newAge };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
