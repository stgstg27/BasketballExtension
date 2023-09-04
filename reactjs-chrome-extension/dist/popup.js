/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/popup/popup.tsx");




function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    console.log(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
init();


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popupBackend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupBackend.js */ "./src/popup/popupBackend.js");
/* harmony import */ var _scorecard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scorecard */ "./src/popup/scorecard.tsx");
/* harmony import */ var react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tailwindcss-datepicker */ "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// import './popup.css'


// import Datepicker from "react-tailwindcss-datepicker"; 
// import DatePicker from "react-datepicker";

// import DatePicker from "react-widgets/DatePicker";
const convertSingleDateToDoubleDate = (date) => {
    return {
        startDate: date,
        endDate: date
    };
};
const Popup = () => {
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        startDate: null,
        endDate: null
    });
    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [anygame, setAnyGame] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleChange = (e) => __awaiter(void 0, void 0, void 0, function* () {
        setValue(previousValue => e);
        console.log(e);
        setDate(previousDate => e.startDate);
        console.log("Update value");
        const gameOutput = yield (0,_popupBackend_js__WEBPACK_IMPORTED_MODULE_1__.getGameDetails)(e.startDate);
        const anyGameOutput = yield (0,_popupBackend_js__WEBPACK_IMPORTED_MODULE_1__.isGameThereOnDate)(e.startDate);
        setGame(previousGame => gameOutput);
        setAnyGame(previousAnyGame => anyGameOutput);
    });
    const getGameFunctions = (dateInConsideration) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0,_popupBackend_js__WEBPACK_IMPORTED_MODULE_1__.getGameDetails)(date);
    });
    const getAnyGameFunction = (dateInConsideration) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0,_popupBackend_js__WEBPACK_IMPORTED_MODULE_1__.isGameThereOnDate)(date);
    });
    // useEffect(()=>{  
    //   const gameOutput = getGameFunctions(date);
    //   const anyGameOutput = getAnyGameFunction(date)
    //   setGame(previousGame => gameOutput);
    //   setAnyGame(previousAnyGame => anyGameOutput)                                            
    // })
    // game.then((ret)=>{
    //   if(ret == null)
    //     setAnyGame(false);
    // })
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tailwindcss_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"], { asSingle: true, value: value, onChange: handleChange }),
        anygame ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_scorecard__WEBPACK_IMPORTED_MODULE_2__.Scorecard, { gameT: game, anyGame: true })) :
            (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " There is no game today "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ "./src/popup/scorecard.tsx":
/*!*********************************!*\
  !*** ./src/popup/scorecard.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scorecard": () => (/* binding */ Scorecard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
let game = {
    awayTeam: {
        logoURL: "https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&h=70&w=70"
    },
    homeTeam: {
        logoURL: "https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&h=70&w=70"
    },
};

function Scorecard({ gameT, anyGame }) {
    // Setting State for the Away Team 
    const [gameId, setGameId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [awayTeamlogoURL, setAwayTeamlogoURL] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [awayTeamLoss, setAwayTeamLoss] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [awayTeamCity, setAwayTeamCity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [awayTeamScore, setAwayTeamScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [awayTeamWins, setAwayTeamWins] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [awayTeamScorePerQuarter, setAwayTeamScorePerQuarter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    // Setting State for the Home Team
    const [homeTeamlogoURL, setHomeTeamlogoURL] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [homeTeamLoss, setHomeTeamLoss] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [homeTeamCity, setHomeTeamCity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [homeTeamScore, setHomeTeamScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [homeTeamWins, setHomeTeamWins] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [homeTeamScorePerQuarter, setHomeTeamScorePerQuarter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    console.log(anyGame);
    if (anyGame == false) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " There is no game today "));
    }
    console.log(gameT);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setGameId(gameT.gameId);
        setAwayTeamlogoURL(gameT.awayTeam.logoURL);
        setAwayTeamLoss(gameT.awayTeam.losses);
        setAwayTeamCity(gameT.awayTeam.teamCity);
        setAwayTeamScore(gameT.awayTeamScore);
        setAwayTeamWins(gameT.awayTeam.wins);
        setAwayTeamScorePerQuarter(gameT.awayTeamScorePerQuarter);
        setHomeTeamlogoURL(gameT.homeTeam.logoURL);
        setHomeTeamLoss(gameT.homeTeam.losses);
        setHomeTeamCity(gameT.homeTeam.teamCity);
        setHomeTeamScore(gameT.homeTeamScore);
        setHomeTeamWins(gameT.homeTeam.wins);
        setHomeTeamScorePerQuarter(gameT.homeTeamScorePerQuarter);
    });
    let scoreBoard = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-auto my-2 max-w-md rounded overflow-hidden shadow-md text-xs" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex bg-gray-200 px-2 py-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-5/12 text-gray-700 text-left text-red-700" }, " Teams "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-5/12 flex justify-end items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-2 text-center" }, "1"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-2 text-center" }, "2"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-2 text-center" }, "3"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-2 text-center" }, "4")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-1/6 text-gray-700 text-right" }, "Score")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex px-2 py-2 items-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-5/12 flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-6 sm:w-10 mr-2 self-center", alt: "away-logo", src: awayTeamlogoURL }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm font-bold" },
                        " ",
                        awayTeamCity,
                        " "),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "hidden sm:block text-gray-600" },
                        " ",
                        awayTeamWins))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-5/12 flex justify-end items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, awayTeamScorePerQuarter[0]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, awayTeamScorePerQuarter[1]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, awayTeamScorePerQuarter[2]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, awayTeamScorePerQuarter[3])),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-1/6 text-lg sm:text-xl font-bold text-right" }, awayTeamScore)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex px-2 py-2 items-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-5/12 flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-6 sm:w-10 mr-2 self-center", alt: "home-logo", src: homeTeamlogoURL }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm font-bold" }, homeTeamCity),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "hidden sm:block text-gray-600" }, homeTeamWins))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-5/12 flex justify-end items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, homeTeamScorePerQuarter[0]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, homeTeamScorePerQuarter[1]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, homeTeamScorePerQuarter[2]),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-8 px-1 text-center" }, homeTeamScorePerQuarter[3])),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "w-1/6 text-lg sm:text-xl font-bold text-right" }, homeTeamScore)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "hidden sm:block border-t border-gray-300" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-center text-gray-500 m-1 uppercase" }, "Top Performers"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-1/2 px-2 py-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-10 mr-2 self-center", src: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png?w=90&h=60&scale=crop&transparent=true" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-semibold" }, "Kawhi Leonard"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-600" }, "TOR - SF"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-600" }, "30 PTS, 7 REB, 6 AST")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-1/2 px-2 py-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-10 mr-2 self-center", src: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png?w=90&h=60&scale=crop&transparent=true" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-semibold" }, "Stephen Curry"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-600" }, "GS - SG"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-600" }, "47 PTS, 8 REB, 7 AST"))))))));
    return scoreBoard;
}


/***/ }),

/***/ "./src/popup/popupBackend.js":
/*!***********************************!*\
  !*** ./src/popup/popupBackend.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game),
/* harmony export */   "Team": () => (/* binding */ Team),
/* harmony export */   "convertDateToString": () => (/* binding */ convertDateToString),
/* harmony export */   "getGameDetails": () => (/* binding */ getGameDetails),
/* harmony export */   "isGameThereOnDate": () => (/* binding */ isGameThereOnDate)
/* harmony export */ });
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autoprefixer */ "./node_modules/autoprefixer/lib/autoprefixer.js");
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_0__);



class Game{
    
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


  class Team{
    
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

const twoLength = (str) => {
  if(str.length == 1)
    return "0"+str
  else
    return str;
}

const convertDateToString = (date) => {
  const year = date.getUTCFullYear()
  const numOfmonth = date.getMonth() + 1
  const month = twoLength(numOfmonth.toString())
  const currentDate = twoLength(date.getDate())  
  return year + "-" + month + "-" + currentDate
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

  async function isGameThereOnDate(date){
    var apiEndpoint = "https://proxy.boxscores.site/?apiUrl=stats.nba.com/stats/scoreboardv3&GameDate=" + date + "&LeagueID=00"
    const response = await fetch(apiEndpoint);
    const jsonData = await response.json();

    if(jsonData.scoreboard.games.length == 0){
      return false;
    }
    console.log("Today, there is a game present")
    return true;
  }
  
  async function getGameDetails(date) {
    console.log("Trying to get games for the date: " +  date)

    if(date == undefined){
      date = convertDateToString(new Date())
    }
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
  
  

/***/ }),

/***/ "?3465":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreactjs_chrome"] = self["webpackChunkreactjs_chrome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_autoprefixer_lib_autoprefixer_js-node_modules_react-tailwindcss-datepick-452ff4","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map