import { useTheme } from "@mui/material";
import Script from 'next/script'
import React from 'react';
import { DOMParser } from '@xmldom/xmldom'


const Calendar = ({ props, locale }) => {

  const theme = useTheme();

  const embedCode = props.embed_code;
  const calendarProps = {}

  calendarProps["data-type"] = "normal";

  if (embedCode) {
    try {
      const html = new DOMParser().parseFromString(embedCode, 'text/html');
      const embedEl = html.getElementsByClassName("event-calendar-embed")[0];
      const attrs = embedEl.attributes
      for (let i = 0; i < attrs.length; i++) {
        const attr = attrs.item(i)
        if (attr.name.startsWith("data-")) {
          calendarProps[attr.name] = attr.value
        }
      }
    } catch (error) { }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Script src={props.calendar} />
        {
          React.createElement(
            "div",
            {
              ...calendarProps,
              className: "event-calendar-embed",
            }
          )
        }
      </div>
    </>
  )
}


export default Calendar


