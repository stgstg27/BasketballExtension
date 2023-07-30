let game = {
  awayTeam : {
    logoURL: "https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&h=70&w=70"
  },
  homeTeam : {
    logoURL: "https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&h=70&w=70"
  },
}
import React, { useRef, useState } from 'react';

import { getGameDetails, Game, Team } from './popupBackend.js'

export function Scorecard({gameT}){
  // Setting State for the Away Team 
  const [gameId, setGameId] = useState('');
  const [awayTeamlogoURL, setAwayTeamlogoURL] = useState('');
  const [awayTeamLoss, setAwayTeamLoss] = useState('');
  const [awayTeamCity, setAwayTeamCity] = useState('')
  const [awayTeamScore, setAwayTeamScore] = useState(0)
  const [awayTeamWins, setAwayTeamWins] = useState(0)
  const [awayTeamScorePerQuarter, setAwayTeamScorePerQuarter] = useState([])

  // Setting State for the Home Team
  const [homeTeamlogoURL, setHomeTeamlogoURL] = useState('');
  const [homeTeamLoss, setHomeTeamLoss] = useState('');
  const [homeTeamCity, setHomeTeamCity] = useState('')
  const [homeTeamScore, setHomeTeamScore] = useState(0)
  const [homeTeamWins, setHomeTeamWins] = useState(0)
  const [homeTeamScorePerQuarter, setHomeTeamScorePerQuarter] = useState([])

  const gameToConsider = gameT.then((ret) => {
    setGameId(ret.gameId)
    setAwayTeamlogoURL(ret.awayTeam.logoURL)
    setAwayTeamLoss(ret.awayTeam.losses)
    setAwayTeamCity(ret.awayTeam.teamCity)
    setAwayTeamScore(ret.awayTeamScore)
    setAwayTeamWins(ret.awayTeam.wins)
    setAwayTeamScorePerQuarter(ret.awayTeamScorePerQuarter)

    setHomeTeamlogoURL(ret.homeTeam.logoURL)
    setHomeTeamLoss(ret.homeTeam.losses)
    setHomeTeamCity(ret.homeTeam.teamCity)
    setHomeTeamScore(ret.homeTeamScore)
    setHomeTeamWins(ret.homeTeam.wins)
    setHomeTeamScorePerQuarter(ret.homeTeamScorePerQuarter)
    return ret;
  })

let scoreBoard = (
  <div className="mx-auto my-2 max-w-md rounded overflow-hidden shadow-md text-xs">
    <div className="flex bg-gray-200 px-2 py-2">
    <div className="w-5/12 text-gray-700 text-left text-red-700"> Teams </div>
    <div className="w-5/12 flex justify-end items-center">
      <p className="w-8 px-2 text-center">1</p>
      <p className="w-8 px-2 text-center">2</p>
      <p className="w-8 px-2 text-center">3</p>
      <p className="w-8 px-2 text-center">4</p>
    </div>
    <div className="w-1/6 text-gray-700 text-right">Score</div>
  </div>

  <div className="flex px-2 py-2 items-center">
    <div className="w-5/12 flex">
      <img className="w-6 sm:w-10 mr-2 self-center" alt="away-logo" src={awayTeamlogoURL}/>
      <div className="flex flex-col">
        <p className="text-sm font-bold"> {awayTeamCity} </p>
        <p className="hidden sm:block text-gray-600"> {awayTeamWins}</p>
      </div>
    </div>
    <div className="w-5/12 flex justify-end items-center">
      <p className="w-8 px-1 text-center">{awayTeamScorePerQuarter[0]}</p>
      <p className="w-8 px-1 text-center">{awayTeamScorePerQuarter[1]}</p>
      <p className="w-8 px-1 text-center">{awayTeamScorePerQuarter[2]}</p>
      <p className="w-8 px-1 text-center">{awayTeamScorePerQuarter[3]}</p>
    </div>
    <p className="w-1/6 text-lg sm:text-xl font-bold text-right">{awayTeamScore}</p>
  </div>

  <div className="flex px-2 py-2 items-center">
    <div className="w-5/12 flex">
      <img className="w-6 sm:w-10 mr-2 self-center" alt="home-logo" src= {homeTeamlogoURL}/>
      <div className="flex flex-col">
        <p className="text-sm font-bold">{homeTeamCity}</p>
        <p className="hidden sm:block text-gray-600">{homeTeamWins}</p>
      </div>
    </div>
    <div className="w-5/12 flex justify-end items-center">
    <p className="w-8 px-1 text-center">{homeTeamScorePerQuarter[0]}</p>
      <p className="w-8 px-1 text-center">{homeTeamScorePerQuarter[1]}</p>
      <p className="w-8 px-1 text-center">{homeTeamScorePerQuarter[2]}</p>
      <p className="w-8 px-1 text-center">{homeTeamScorePerQuarter[3]}</p>
    </div>
    <p className="w-1/6 text-lg sm:text-xl font-bold text-right">{homeTeamScore}</p>
  </div>

  <div className="hidden sm:block border-t border-gray-300">
    <p className="text-center text-gray-500 m-1 uppercase">Top Performers</p>
    <div className="flex">
      <div className="w-1/2 px-2 py-2">
        <div className="flex">
          <img className="w-10 mr-2 self-center" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png?w=90&h=60&scale=crop&transparent=true"/>
          <div className="flex flex-col">
            <p className="font-semibold">Kawhi Leonard</p>
            <p className="text-gray-600">TOR - SF</p>
            <p className="text-gray-600">30 PTS, 7 REB, 6 AST</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-2 py-2">
        <div className="flex">
          <img className="w-10 mr-2 self-center" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png?w=90&h=60&scale=crop&transparent=true"/>
          <div className="flex flex-col">
            <p className="font-semibold">Stephen Curry</p>
            <p className="text-gray-600">GS - SG</p>
            <p className="text-gray-600">47 PTS, 8 REB, 7 AST</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <div className="border-t bg-gray-200 text-center px-1 py-1">
    <p className="text-gray-600">NBA Finals - Game 2, DEN leads 1-0</p>
  </div>

  <div className="flex border-t bg-gray-200">
    <div className="w-1/2 px-2 py-2 text-center">
      <p className="font-semibold text-gray-700">Ball Arena</p>
      <p className="font-light text-gray-600">Denver, CO</p>
    </div>
    <div className="w-1/2 px-2 py-2 text-center">
      <p className="text-gray-600"><span className="font-semibold">Line</span>: DEN -340</p>
      <p className="text-gray-600"><span className="font-semibold">Line</span>: MIA -300</p>
      <p className="text-gray-600"><span className="font-semibold">O/U</span>: 213</p>
    </div>
  </div> */}

</div>
    );
  
  return scoreBoard
}