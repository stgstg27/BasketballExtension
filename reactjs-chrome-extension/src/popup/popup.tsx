import React, { useRef, useState } from 'react';
// import './popup.css'
import { getGameDetails, isGameThereOnDate, Game, Team } from './popupBackend.js'
import { Scorecard } from './scorecard';
import Datepicker from "react-tailwindcss-datepicker"; 

// import Datepicker from "tailwind-datepicker-react"
// Initialization for ES Users
// import {
//   Datepicker,
//   Input,
//   initTE,
// } from "tw-elements";

// initTE({ Datepicker, Input });

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

const convertSingleDateToDoubleDate = (date) => {
  return { 
    startDate: date, 
    endDate: date 
    }
}



const Popup = () => {
  const [date, setDate] = useState(convertDateToString(new Date()));
  const [game, setGame] = useState(getGameDetails(date));
  const [show, setShow] = useState(false)
  const [anygame, setAnyGame] = useState(isGameThereOnDate(date))
  const dateInputRef = useRef(null);
  const options = {
    title: "Demo Title",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2023-06-01"),
    language: "en",
  }

  const handleChange = async (e) => {
    setDate(e.startDate);
    const gameOutput = await getGameDetails(e.startDate);
    const anygameOutput = await isGameThereOnDate(e.startDate);
    setAnyGame(anygameOutput);
    setGame(gameOutput);
}

    return (
      <div>
      {/* <Datepicker 
        asSingle={true} 
        value={convertSingleDateToDoubleDate(date)} 
        onChange={handleChange} 
      /> */}
      { anygame ? (
        <Scorecard gameT={game}/>
      ) :
      (
        <p> There is no game today </p>
      )}
      
        </div>
    );    
  
  
};

export default Popup;