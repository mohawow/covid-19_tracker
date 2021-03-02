import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

function Cards({ confirmed, recovered, deaths, lastUpdate }) {

  
  return (
    <div className={styles.container}>
      {/* Confirmed */}
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected{" "}
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                seprator=","
              />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">
              Number of infected cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
     
      {/* Recovered */}
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              recovered{" "}
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                seprator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">
              Number of recovered cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      
      {/* Deaths*/}
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              deaths{" "}
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                seprator=","
              />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">
              Number of deaths cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
