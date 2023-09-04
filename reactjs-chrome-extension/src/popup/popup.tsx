import React, { useEffect, useRef, useState } from 'react';
// import './popup.css'
import { getGameDetails, isGameThereOnDate, convertDateToString, Game, Team } from './popupBackend.js'
import { Scorecard } from './scorecard';
// import Datepicker from "react-tailwindcss-datepicker"; 
// import DatePicker from "react-datepicker";
import Datepicker from "react-tailwindcss-datepicker";
// import DatePicker from "react-widgets/DatePicker";



const convertSingleDateToDoubleDate = (date) => {
  return { 
    startDate: date, 
    endDate: date 
    }
}

const Popup = () => {
  const [date, setDate] = useState();
  const [value, setValue] = useState({ 
    startDate: null, 
    endDate: null 
    });
  const [game, setGame] = useState();
  const [anygame, setAnyGame] = useState(false)


  const handleChange = async (e) => {
    setValue(previousValue => e); 
    console.log(e);
    setDate(previousDate => e.startDate);
    console.log("Update value")
    const gameOutput = await getGameDetails(e.startDate);
    const anyGameOutput = await isGameThereOnDate(e.startDate)
    setGame(previousGame => gameOutput);
    setAnyGame(previousAnyGame => anyGameOutput)
  }

  const getGameFunctions = async(dateInConsideration) => {
    return await getGameDetails(date);
    
  }

  const getAnyGameFunction = async(dateInConsideration) => {
    return await isGameThereOnDate(date)
  }

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

  return (
    <div>
      <Datepicker 
          asSingle={true} 
          value={value} 
          onChange={handleChange} 
      />       
      { 
        anygame ? (
          <Scorecard 
            gameT={game} 
            anyGame={true}
          />
        ) :
        (
          <p> There is no game today </p>
        )
      }
    </div>
  );    
};

export default Popup;