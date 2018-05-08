// @flow
import React from "react";
import Grid from "material-ui/Grid";
import InfoBox from "common/components/InfoBox";
import Orders from "./Charts/Orders";
import StrainsList from "./Tables/StrainsList";
import PlasmidsList from "./Tables/PlasmidsList";
import LatestStrains from "./Lists/LatestStrains";
import LatestPlasmids from "./Lists/LatestPlasmids";
import Poll from "@material-ui/icons/Poll";
import Public from "@material-ui/icons/Public";
import Whatshot from "@material-ui/icons/Whatshot";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import deepPurple from "material-ui/colors/deepPurple";
import data from "common/data/data";

/**
 * This is the layout component for the Stock Center dashboard. It uses Material-UI's grid system for width and responsiveness.
 */

const DscDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={3}>
        <InfoBox
          Icon={Poll}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Strains"
          value="1927"
        />
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <InfoBox
          Icon={Public}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Plasmids"
          value="882"
        />
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <InfoBox
          Icon={Whatshot}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Antibodies"
          value="12"
        />
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <InfoBox
          Icon={LibraryBooks}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Genomic Libraries"
          value="1"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Orders data={data.charts.orders} color={deepPurple[300]} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <StrainsList data={data.tables.latestGenes} color={deepPurple[700]} />
      </Grid>
      <Grid item xs={10} sm={12} md={4} lg={4}>
        <PlasmidsList
          data={data.tables.mostUsedGenes}
          color={deepPurple[500]}
        />
      </Grid>
      <Grid item xs={10} sm={6} md={2} lg={2}>
        <LatestStrains data={data.tables.latestGenes} color={deepPurple[400]} />
      </Grid>
      <Grid item xs={10} sm={6} md={2} lg={2}>
        <LatestPlasmids
          data={data.tables.latestGenes}
          color={deepPurple[600]}
        />
      </Grid>
    </Grid>
  );
};

export default DscDashboard;
