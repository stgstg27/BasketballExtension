async function logJSONData() {
  const response = await fetch("https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json");
  const jsonData = await response.json();
  console.log(jsonData);
}

logJSONData()
