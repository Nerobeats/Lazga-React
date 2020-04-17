import React from "react";
import { Button } from "react-bootstrap";
import colorsOptions from "../../colors";
import Popover from "@material-ui/core/Popover";

const ColorButtons = ({
  anchorEl,
  setAnchorEl,
  color,
  setColor,
  handleClose,
}) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleColorSwitch = (index) => {
    setColor(index + 1);
    setAnchorEl(false);
  };

  let colorArray = Object.keys(colorsOptions);
  const colorButtons = Object.keys(colorsOptions).map((key, index) => (
    <Button
      variant={color == index + 1 ? "dark" : "outline-dark "}
      onClick={() => handleColorSwitch(index)}
      data-toggle="tooltip"
      data-placement="top"
      title={key}
      style={{
        width: "25px",
        height: "25px",
        borderWidth: "1px",
        borderColor: "#e8e8ec",
        borderRadius: color === index + 1 ? "0.35rem" : "100rem",
        backgroundColor: colorsOptions[key],
        margin: "0.25rem 0.25rem 0.25rem 0.25rem",
      }}
    ></Button>
  ));
  return (
    <div>
      {" "}
      <Button
        aria-describedby={id}
        className="color-picker"
        onClick={handleClick}
      >
        <div
          class="color-circle"
          style={{
            backgroundColor: colorsOptions[colorArray[color - 1]],
          }}
        ></div>{" "}
        <text className="color-text">{colorArray[color - 1]}</text>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {colorButtons}
      </Popover>
    </div>
  );
};

export default ColorButtons;
