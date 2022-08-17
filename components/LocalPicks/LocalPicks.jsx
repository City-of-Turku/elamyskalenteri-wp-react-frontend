import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import vinkLogo from "../../public/svg/vinkLogo1.svg";

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

    if (isLoading) return <p>Loading...</p>
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
                }}
                style={{ textAlign: "center" }}
            >
                <span style={{ textAlign: "center" }}>{props.header[locale]}</span>
            </Box>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexDirection: "row" }}>
                {props.column.map((col, index) => (
                    <div key={index} style={{ width: 456, textAlign: "center" }}>
                        <h2 style={{ backgroundColor: "#9AD9C2", color: "#193773", padding: 16, borderRadius: 4 }}>{col.content.location}</h2>
                        {props.column.map((item) => (
                            <div className="localpicks">
                                <div style={{ position: "relative", width: "100%", paddingBottom: "20%" }} >

                                    { turku.images[0]?.url && (
                                        <Image
                                            layout="fill"
                                            objectFit="contain"
                                            src={turku.images[0]?.url}
                                            alt='Avatar'
                                        />
                                    )}
                                </div>
                                <div>
                                    <p>{turku.start_time}</p>
                                    <h3 style={{ fontSize: 18, color: "#F26835", fontFamily: 'halogen' }} key={item.id}>{turku.name.fi}</h3>
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


