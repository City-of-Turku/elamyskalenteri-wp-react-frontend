import { useTheme } from "@mui/material";
import Script from 'next/script'
import React from 'react';

const Calendar = ({ props, locale }) => {
  const theme = useTheme();

  const options = !!props.options ? JSON.parse(props.options) : {}
  const calendarProps = {}

  for (const [key, value] of Object.entries(options)) {
    calendarProps[`data-${key}`] = value
  }


  console.log('calendarProps', calendarProps)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Script src={props.calendar} />
        {
          React.createElement(
            "div",
            {
              ...options,
              className: "event-calendar-embed",
              "data-type": "normal"
            }
          )
        }
      </div>
    </>
  )
}


export default Calendar


