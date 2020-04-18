import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideNav = () => {
  const [value1, setValue1] = React.useState("female");

  const handleChangeFirst = (event) => {
    setValue1(event.target.value);
  };

  return (
    <div>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Expansion Panel 1
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value1}
              onChange={handleChangeFirst}
            >
              <FormControlLabel
                value="female1"
                control={<Radio />}
                label="Female1"
              />
              <FormControlLabel
                value="male1"
                control={<Radio />}
                label="Male1"
              />
              <FormControlLabel
                value="other1"
                control={<Radio />}
                label="Other1"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default SideNav;
