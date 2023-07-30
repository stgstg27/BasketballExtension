import { data } from "autoprefixer";


export class Game{
    
    constructor(gameId, date, awayTeam, homeTeam, awayTeamScorePerQuarter, homeTeamScorePerQuarter,
      homeTeamScore, awayTeamScore, quarter) {
      this.gameId = gameId;
      this.date = date;
      this.awayTeam = awayTeam;
      this.homeTeam = homeTeam;
      this.awayTeamScorePerQuarter = awayTeamScorePerQuarter;
      this.homeTeamScorePerQuarter = homeTeamScorePerQuarter;
      this.homeTeamScore = homeTeamScore;
      this.awayTeamScore = awayTeamScore;
      this.quarter = quarter;
    }

    get getAwayTeam(){
      return this.awayTeam
    }
    
  }


  export class Team{
    
    constructor(teamID, teamName, teamCity, teamSlug, teamTricode, wins, losses, matchStatus) {
    this.teamID = teamID
    this.teamName = teamName
    this.teamCity = teamCity
    this.teamSlug = teamSlug
    this.matchStatus = matchStatus
    this.teamTricode = teamTricode
    this.wins = wins
    this.losses = losses
    this.logoURL = "https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/" + teamTricode + ".png&h=70&w=70"
  }

  get getLogoURL(){
    return this.logoURL
  }
}

  function createTeam(gameData, matchStatus) {
    if(matchStatus == "AWAY") {
      return new Team(gameData.awayTeam.teamID, gameData.awayTeam.teamName, 
      gameData.awayTeam.teamCity, gameData.awayTeam.teamSlug, gameData.awayTeam.teamTricode, 
      gameData.awayTeam.wins, gameData.awayTeam.losses, matchStatus);
    }
    else{
      return new Team(gameData.homeTeam.teamID, gameData.homeTeam.teamName, 
        gameData.homeTeam.teamCity, gameData.homeTeam.teamSlug, gameData.homeTeam.teamTricode, 
        gameData.homeTeam.wins, gameData.homeTeam.losses, matchStatus);
    }    
  }

  function generateScorePerQuarterArray(teamPeriodScore){
    let scoreArray = []
    let itr = 0
    while(itr < teamPeriodScore.length){
      scoreArray.push(teamPeriodScore[itr].score)
      itr++
    }
    return scoreArray 
  }

  export async function isGameThereOnDate(date){
    var apiEndpoint = "https://proxy.boxscores.site/?apiUrl=stats.nba.com/stats/scoreboardv3&GameDate=" + date + "&LeagueID=00"
    const response = await fetch(apiEndpoint);
    const jsonData = await response.json();

    if(jsonData.scoreboard.games.length == 0){
      return false;
    }
    console.log("Today, there is a game present")
    return true;
  }
  
  export async function getGameDetails(date) {
    var apiEndpoint = "https://proxy.boxscores.site/?apiUrl=stats.nba.com/stats/scoreboardv3&GameDate=" + date + "&LeagueID=00"
    const response = await fetch(apiEndpoint);
    const jsonData = await response.json();

    if(jsonData.scoreboard.games.length == 0){
      console.log("No Match Today, Sorry Boss!!!! \n");
      return null;
    }

    const dateOfTheMatch = jsonData.scoreboard.gameDate;
    const games = jsonData.scoreboard.games;

    const gameData = games[0];
    
    const awayTeam = createTeam(gameData, "AWAY");
    const homeTeam = createTeam(gameData,"HOME")

    const game = new Game(gameData.gameId, 
      dateOfTheMatch, awayTeam, homeTeam,
      generateScorePerQuarterArray(gameData.awayTeam.periods),
      generateScorePerQuarterArray(gameData.homeTeam.periods),
    gameData.homeTeam.score, gameData.awayTeam.score, gameData.period);

    return game;
  }
  
  