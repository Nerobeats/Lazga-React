import React from "react";
import NumericInput from "react-numeric-input";

const QuantityInput = ({ quantity, setQuantity }) => {
  return (
    <div>
      <h6 style={{ padding: "1rem 1rem 0rem 1rem" }}>Quantity</h6>
      <NumericInput
        initValue={1} //<---Add---
        value={quantity} //<----changes---
        onChange={(value) => setQuantity(value)}
        min={1}
        max={100}
        step={1}
        snap
        strict
        mobile="true"
        size="1"
        style={{
          input: {
            paddingLeft: "0ex",
            fontSize: "1.5rem",
            backgroundColor: "#e8e8ec",
          },
        }}
      />
    </div>
  );
};

export default QuantityInput;
