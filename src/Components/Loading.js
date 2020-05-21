import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => (
  <div className="centered">
    <FontAwesomeIcon
      icon={faSpinner}
      spin
      size="10x"
      style={{ color: "rgba(0,0,255,0.5)" }}
    />
  </div>
);

export default Loading;
