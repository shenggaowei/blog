import React from "react"

const Divider = ({
  text = "",
  color = "#999",
  lineColor = "#999",
  margin = "20px",
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <div
      style={{
        flexGrow: 1,
        borderBottom: `1px solid ${lineColor}`,
        margin: "30px 0",
      }}
    ></div>
    <div
      style={{
        margin: `0 ${margin}`,
        color: color,
        fontSize: "20px",
      }}
    >
      {text}
    </div>
    <div
      style={{
        flexGrow: 1,
        borderBottom: `1px solid ${lineColor}`,
      }}
    ></div>
  </div>
)

export default Divider
