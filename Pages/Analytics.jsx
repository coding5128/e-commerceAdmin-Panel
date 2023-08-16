import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Popuationcharts from "../Charts/Populationcharts";
import Piecharts from "../Charts/Piecharts";
import Geocharts from "../Charts/Geocharts";
import CountUp from "react-countup";
import Grid from "@mui/material/Grid";

import "../Dash.css";
export default function Analytics() {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Card sx={{ height: 25 + "vh" }} className="gradient">
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#fff" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ color: "#fff" }}
                      >
                        <CountUp delay={0.2} end={22000} duration={0.3} />
                      </Typography>
                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{ color: "#fff" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ height: 25 + "vh" }} className="gradientlight">
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#fff" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ color: "#fff" }}
                      >
                        <CountUp delay={0.4} end={42000} duration={0.6} />
                      </Typography>
                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{ color: "#fff" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ height: 25 + "vh" }} className="gradient">
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ color: "#ccd1d1" }}
                      >
                        <CountUp delay={0.4} end={32000} duration={0.6} />
                      </Typography>
                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ height: 25 + "vh" }} className="gradientlight">
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ color: "#ccd1d1" }}
                      >
                        <CountUp delay={0.4} end={52000} duration={0.6} />
                      </Typography>
                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ height: 50 + "vh" }}>
                <CardContent>
                  <Popuationcharts />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: 50 + "vh" }}>
                <CardContent>
                  <Geocharts />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 50 + "vh" }}>
                <CardContent>
                  <Piecharts />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
