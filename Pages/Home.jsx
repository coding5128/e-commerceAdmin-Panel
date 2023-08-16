import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordionData from "../Components/AccordionData";
import Barcharts from "../Charts/Barcharts";
import CountUp from "react-countup";
import "../Dash.css";
export default function Home() {
  return (
    <div>
      <div className="bgcolor">
        <Navbar />
        <Box height={60} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div>
                        <CreditCardIcon className="iconstylelight" />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $<CountUp delay={0.2} end={500.0} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div>
                        <ShoppingBagIcon className="iconstylelight" />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $<CountUp delay={0.2} end={9000.0} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={6} md={4}>
                <Stack spacing={2}>
                  <Card sx={{ minWidth: 345 }} className="gradientlight">
                    <Stack spacing={2} direction="row">
                      <div>
                        <StorefrontIcon className="iconstyle" />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$203k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ minWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div>
                        <StorefrontIcon className="iconstyleblack" />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$203k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Barcharts />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricetitle">Popular Products</span>
                    </div>
                    <AccordionData />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}
