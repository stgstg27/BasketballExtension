class Game{
  constructor(gameId, date, awayTeam, homeTeam, homeTeamScore, awayTeamScore){
    this.gameId = gameId;
    this.date = date;
    this.awayTeam = awayTeam;
    this.homeTeam = homeTeam;
    this.homeTeamScore = homeTeamScore;
    this.awayTeamScore = awayTeamScore;
  }

}

async function getGameDetails() {
  const response = await fetch("https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json");
  const jsonData = await response.json();
  const date = jsonData.scoreboard.gameDate;
  const games = jsonData.scoreboard.games;
  const gameData = games[1];
  const game = new Game(gameData.gameId, 
  date, gameData.awayTeam.teamName, 
  gameData.homeTeam.teamName, 
  gameData.homeTeam.score, gameData.awayTeam.score);

  console.log(game)
}

getGameDetails()
