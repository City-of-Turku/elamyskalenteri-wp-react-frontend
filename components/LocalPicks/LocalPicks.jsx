import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import vinkLogo from "../../public/svg/vinkLogo1.svg";
import dayjs from "dayjs";
import { color } from "@mui/system";

const LocalPicks = ({ props, locale }) => {
  console.log("props: ", props)
  const [turku, setTurku] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(props.column[0].content.post[0].url)
      .then((res) => res.json())
      .then((turku) => {
        setTurku(turku)
        console.log('hae yksi', turku)
        setLoading(false)
      })
    props.column.map(item => {
      if (item.content.location === 'Turku') {
        item.content.post.map(item => {
          fetch(item.url)
            .then(res => res.json())
            .then(
              (result) => {
                setTurku(result)
                console.log('hae kaikki', result)
              })
        })
      }
    })
  }, [])

  if (isLoading) return <Box sx={{ display: "flex", justifyContent: "center" }}><CircularProgress /></Box>
  if (!turku) return <p>No data</p>
  return (
    <>
      <Box
        sx={{
          pb: 4,
          flexGrow: 1,
          display: { xs: "none", md: "block" },
          alignItems: "center",
          fontSize: 35,
          fontFamily: "halogen",
          fontWeight: 900,
          whiteSpace: "nowrap",
          wordWrap: "break-word",
          color: "#193773"
        }}
        style={{ textAlign: "center" }}
      >
        <span>{props.header[locale]}</span>
      </Box>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, flexDirection: "row" }}>
        {props.column.map((col, index) => (
          <div key={index} style={{ width: 456, textAlign: "center" }}>
            <h2 style={{ fontSize: 28, fontFamily: "halogen", backgroundColor: "#9AD9C2", color: "#193773", padding: 16, borderRadius: 4, fontWeight: 900, letterSpacing: 1 }}>{col.content.location}</h2>
            {props.column.map((item, index) => (
              <div key={index} className="localpicks">
                <div style={{ position: "relative" }} >
                  {turku.images[0]?.url && (
                    <Box
                      component="img"
                      sx={{
                        height: 105,
                        width: 165,
                        borderRadius: 0.5,
                        boxShadow: 3,
                        // objectFit: "contain",
                        maxHeight: { xs: 105, md: 105 },
                        maxWidth: { xs: 165, md: 165 },
                      }}
                      src={turku.images[0]?.url}
                      alt="Avatar"
                    />
                  )}
                </div>
                <div style={{ textAlign: "left", paddingLeft: 25 }}>
                  <Typography variant="subtitle2" sx={{ fontSize: 14 }}>{dayjs(turku.start_time).format("DD.MM.YYYY | HH:mm")} - {dayjs(turku.end_time).format("HH:mm")}</Typography>
                  <h3 style={{ fontSize: 18, color: "#F26835", fontFamily: "halogen" }} key={item.id}>{turku.name.fi}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default LocalPicks