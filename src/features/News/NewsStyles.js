// @flow
import styled from "styled-components"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"

export const PaperStyle = styled(Paper)`
  height: 100%;
`

export const HeaderStyle = styled(Typography)`
  font-size: 24px;
  color: #fff;
  background-image: linear-gradient(
    60deg,
    rgb(171, 71, 188),
    rgb(142, 36, 170)
  );
  padding: 10px;
`

export const ItemStyle = styled.div`
  padding-left: 5px;
`
