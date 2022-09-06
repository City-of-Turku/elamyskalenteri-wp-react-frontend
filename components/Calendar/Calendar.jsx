import {useTheme} from "@mui/material";
import Script from 'next/script'
import React, {useState, useEffect} from 'react';

const Calendar = ({ props, locale }) => {
    const theme = useTheme();
    console.log(props);

  return (
    <>
        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
            <Script src={props.calendar} />
            <div className="event-calendar-embed" data-navbar="hidden" data-type="normal"></div>
        </div>
    </>
  )
}

export default Calendar


