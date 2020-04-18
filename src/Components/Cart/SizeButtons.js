import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const SizeButtons = ({ size, setSize }) => {
  const sizes = ["S", "M", "L", "XL", "2XL"];
  const sizeButtons = sizes.map((s, index) => (
    <Button
      variant="contained"
      onClick={() => setSize(index + 1)}
      style={{
        width: "3vw",
        backgroundColor: size === index + 1 ? "#848488" : "#e8e8ec",
      }}
    >
      <text style={{ fontSize: "1vw" }}>{s}</text>
    </Button>
  ));
  return (
    <div>
      {" "}
      <h6 style={{ padding: "1rem 1rem 0rem 1rem" }}>Size</h6>
      <ButtonGroup
        aria-label="size"
        style={{ padding: "0rem 0rem 1.5rem 0rem" }}
      >
        {sizeButtons}
      </ButtonGroup>
    </div>
  );
};

export default SizeButtons;
