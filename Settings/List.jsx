import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Personal from "./Personal";
import Profile from "./Profile";
import PropTypes from "prop-types";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#141414",
    fontWeight: "400",
    "&.Mui-selected": {
      color: "#0c8281",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#30c1d1",
    },
  })
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ minHeight: 84 + "vh" }}>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <StyledTab label="Profile" {...a11yProps(0)} />
              <StyledTab label="Personal" {...a11yProps(1)} />
              <StyledTab label="Item Three" {...a11yProps(2)} />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Profile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Personal />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}
