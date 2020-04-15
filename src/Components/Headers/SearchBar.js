import React from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <FormControl variant="outlined" fullWidth>
      <OutlinedInput
        className="search-bar"
        variant="outlined"
        id="search-bar"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <FontAwesomeIcon icon={faSearch} size="2x" swapOpacity />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
