import React from "react"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "5px",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into its own layer on Chrome. This costs memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
})

const ImageHorizontalGrid = props => {
  const { classes, imageData, handleClick } = props
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
        {imageData.map((tile, i) => (
          <GridListTile key={i} onClick={() => handleClick(tile.component)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageHorizontalGrid)
