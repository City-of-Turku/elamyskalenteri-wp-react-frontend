const LocalPicks = ({ props }) => {
  console.log("props: ", props)
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Vinkkejä alueittain</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, flexDirection: "row" }}>
        {props.column.map((col, index) => (
          <div key={index} style={{ width: 456, textAlign: "center"}}>
            <h2 style={{  backgroundColor: "#9AD9C2", padding: 16, borderRadius: 4 }}>{col.content.location}</h2>
            {col?.content?.post?.map(post => (
              <div style={{ padding: "24px 0" }}>
                <p style={{ textAlign: "start"}}>{post.url}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default LocalPicks