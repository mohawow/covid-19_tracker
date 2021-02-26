import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

function Cards({ confirmed, recovered, deaths, lastUpdated }) {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="left">
        <Grid
          item
          component={Card}
          xs={12}
          md={8}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected{" "}
            </Typography>
            <Typography varaint="h5">
              <CountUp start={0} end="1233334" duration={2} seprator="," />
            </Typography>
            <Typography color="textSecondary">02/25/2021</Typography>
            <Typography varaint="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
