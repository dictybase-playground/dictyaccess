// @flow
import React from "react"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { HeaderStyle, ResponsiveTable } from "common/styles/TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This is a table that shows a list of genes.
 */

const GenesList = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        List of Genes
      </HeaderStyle>
      <ResponsiveTable>
        <TableHead>
          <TableRow>
            <TableCell>Gene Name</TableCell>
            <TableCell>Gene ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ResponsiveTable>
    </Paper>
  )
}

export default GenesList
