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
  const [value1, setValue1] = React.useState("all");

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
          Themes
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Themes</FormLabel> */}
            <RadioGroup
              aria-label="themes"
              name="themes"
              value={value1}
              onChange={handleChangeFirst}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="videogames"
                control={<Radio />}
                label="Video Games"
              />
              <FormControlLabel
                value="movies"
                control={<Radio />}
                label="Movies"
              />
              <FormControlLabel
                value="tvshow"
                control={<Radio />}
                label="TV Shows"
              />
              <FormControlLabel
                value="calligraphy"
                control={<Radio />}
                label="Calligraphy"
              />
              <FormControlLabel
                value="anime"
                control={<Radio />}
                label="Anime"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default SideNav;
