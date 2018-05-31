import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { legendHeaderStyle } from "../../styles/legendStyles"

const LegendHeader = props => {
  const { classes, className, children, color, plainCard, ...rest } = props
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plainCard,
    [className]: className !== undefined,
  })

  return (
    <div className={cardHeaderClasses} {...rest}>
      <center>
        <h2>Legend</h2>
        {children}
      </center>
    </div>
  )
}

LegendHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plainCard: PropTypes.bool,
}

export default withStyles(legendHeaderStyle)(LegendHeader)
