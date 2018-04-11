import React from "react"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ChevronRight from "@material-ui/icons/ChevronRight"
import ChevronLeft from "@material-ui/icons/ChevronLeft"

const data = {
  menus: [
    { text: "Dicty Stock Center", icon: "", link: "/dashboard" },
    { text: "Genomepage", icon: "", link: "/genomepage" },
    { text: "Dicty Frontpage", icon: "", link: "/frontpage" }
  ],
  tables: {
    latestGenes: [
      {
        descriptor: "acaA-",
        names: "aca-, acaA-(r)",
        id: "DBS0252577"
      },
      {
        descriptor: "dfbcdsaB4-",
        names: "AK00010",
        id: "DBS032350146"
      },
      {
        descriptor: "dfdscB4-",
        names: "dhjf44",
        id: "DBS038350146"
      },
      {
        descriptor: "sdasda33-",
        names: "jfgkhjs3",
        id: "DBS03350146"
      },
      {
        descriptor: "sada2332-",
        names: "kjsjks4",
        systemic: "KFDJR48",
        id: "DBS02350146"
      }
    ],
    mostUsedGenes: [
      {
        descriptor: "sada2332-",
        names: "kjsjks4",
        id: "DBS02350146"
      },
      {
        descriptor: "dfbcdsaB4-",
        names: "AK00010",
        id: "DBS032350146"
      },
      {
        descriptor: "dfdscB4-",
        names: "dhjf44",
        id: "DBS038350146"
      },
      {
        descriptor: "acaA-",
        names: "aca-, acaA-(r)",
        id: "DBS0252577"
      },
      {
        descriptor: "sdasda33-",
        names: "jfgkhjs3",
        id: "DBS03350146"
      }
    ]
  },
  charts: {
    orders: [
      { pv: 20 },
      { pv: 25 },
      { pv: 11 },
      { pv: 22 },
      { pv: 14 },
      { pv: 33 },
      { pv: 8 }
    ],
    browsers: [
      {
        name: "Chrome",
        value: 800,
        color: "rgb(0, 172, 193)",
        icon: <ExpandMore />
      },
      {
        name: "Firefox",
        value: 300,
        color: "rgb(216, 27, 96)",
        icon: <ChevronRight />
      },
      {
        name: "Safari",
        value: 300,
        color: "rgb(142, 36, 170)",
        icon: <ExpandLess />
      },
      {
        name: "Edge",
        value: 100,
        color: "#f48fb1",
        icon: <ChevronLeft />
      }
    ]
  }
}

export default data