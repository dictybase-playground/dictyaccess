import React from "react"
import Drawer from "material-ui/Drawer"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"

// currently overlaps dashboard, need to resize

const Sidebar = ({ sideBarOpen }) => {
  return (
    <Drawer variant="temporary" open={sideBarOpen}>
      DictyAccess
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dicty Stock Center" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Genomepage" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Dicty Frontpage" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
