// @flow
import React from "react"
import {
  IconSpanStyle,
  ContentStyle,
  TextSpanStyle,
  NumberSpanStyle,
  PaperStyle,
} from "./InfoBoxStyles"
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "material-ui"
import PropTypes from "prop-types"

type Props = {
  /** The title of the info box (i.e. Strains) */
  title: string,
  /** The value to display (i.e. a number) */
  value: string,
  /** The material-ui icon */
  Icon: string,
  /** The background color of the icon container. Can be passed as string or Material-UI object (i.e. deepPurple[300]) */
  iconBackgroundColor?: string | Object,
  /** The background color of the text area in the info box. Can be passed as string or Material-UI object (i.e. deepPurple[300]) */
  textBackgroundColor?: string | Object,
}

const styles = {
  card: {
    marginTop: "30px",
    textAlign: "center",
  },
  cardHeader: {
    display: "inline-block",
    width: "100%",
    padding: "0px",
  },
  cardAvatar: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0",
  },
  textAlign: {
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: "1em",
    textTransform: "uppercase",
    marginTop: "10px",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "1.3em",
    fontFamily: "Raleway",
    marginTop: "10px",
    marginBottom: "10px",
  },
  cardDescription: {
    padding: "15px 20px",
    margin: "0 0 10px",
  },
  cardActions: {
    height: "auto",
    display: "inline",
  },
  icon: {
    height: 48,
    width: 48,
    marginTop: 70,
    maxWidth: "100%",
  },
}

const StatsCard = (props: Props) => {
  const { title, value, Icon, iconBackgroundColor, textBackgroundColor } = props

  return (
    <Card className={props.classes.card}>
      <CardHeader
        classes={{
          root: props.classes.cardHeader,
          avatar: props.classes.cardAvatar,
        }}
        avatar={<Icon color="inherit" style={styles.icon} />}
      />
      <CardContent className={props.classes.textAlign}>
        {value !== undefined ? (
          <Typography component="h6" className={props.classes.cardSubtitle}>
            {value}
          </Typography>
        ) : null}
        {title !== undefined ? (
          <Typography component="h4" className={props.classes.cardTitle}>
            {title}
          </Typography>
        ) : null}
        {value !== undefined ? (
          <Typography component="p" className={props.classes.cardDescription}>
            {value}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions
        className={props.classes.textAlign + " " + props.classes.cardActions}>
        Hello
      </CardActions>
    </Card>
  )
}

StatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StatsCard)
