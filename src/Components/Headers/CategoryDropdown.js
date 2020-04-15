import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const CategoryDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const categories = [
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
  ];
  const menuItems = categories.map((category) => (
    <MenuItem onClick={handleClick}>{category}</MenuItem>
  ));

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        style={{ margin: "0rem 2rem 0rem 2rem" }}
      >
        Category
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menuItems}
      </Menu>
    </div>
  );
};

export default CategoryDropdown;
