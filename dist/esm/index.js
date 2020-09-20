import React, { useState } from "react";

const ReactSimpleChart = ({
  x,
  yRange = 10,
  datas
}) => {
  const [valueVisible, setValueVisible] = useState(null);
  let maxValues = 0;

  for (const data of datas) {
    if (data.value.length !== x.length) throw new Error("x length and data value length must be the same.");
    maxValues += Math.max(...data.value);
  }

  const maxValue = maxValues.toString();
  let maxValueDigits = "1";

  for (let i = 0; i < maxValue.length - 1; i++) {
    maxValueDigits += "0";
  }

  let maxY = parseInt(maxValue) / parseInt(maxValueDigits);
  if (maxY % 1 === 0) maxY = (maxY + 1) * parseInt(maxValueDigits);else maxY = Math.ceil(maxY) * parseInt(maxValueDigits);
  const y = [];

  for (let i = 1; i <= yRange; i++) {
    y.push(maxY / yRange * i);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: 20
    }
  }, datas.map(data => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      marginRight: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      backgroundColor: data.color,
      marginRight: 10
    }
  }), /*#__PURE__*/React.createElement("span", null, data.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column-reverse",
      flex: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "100%",
      paddingTop: 10,
      position: "relative",
      top: -7
    }
  }, "0"), y.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "flex",
      height: `${100 / y.length}%`,
      borderRight: "1px solid #000",
      width: "100%",
      marginRight: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      top: -8
    }
  }, v)))), x.map((v, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      width: `${100 / x.length}%`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
      width: "100%",
      flex: 1,
      position: "relative"
    },
    onMouseOver: () => setValueVisible(index),
    onMouseLeave: () => setValueVisible(null)
  }, y.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-end",
      height: `${100 / y.length}%`,
      borderTop: "1px solid #ababab"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column-reverse",
      position: "absolute",
      height: "100%",
      width: "50%",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, datas.map(data => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: data.color,
      height: `${data.value[index] / maxY * 100}%`
    }
  }, valueVisible === index && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff"
    }
  }, data.value[index]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #000",
      width: "100%",
      textAlign: "center",
      paddingTop: 10
    }
  }, v)))));
};

export default ReactSimpleChart;
//# sourceMappingURL=index.js.map