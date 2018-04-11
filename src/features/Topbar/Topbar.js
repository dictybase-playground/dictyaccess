import React from "react"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import IconButton from "material-ui/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const Topbar = () => {
  return (
    <div>
      <br />
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            DictyAccess
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Topbar