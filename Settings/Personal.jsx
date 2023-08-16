import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <div>
      <Box sx={{ m: 2 }} />

      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={6} className="personal">
          <Typography variant="h5" algin="center">
            Add Products
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              // value={name}
              // onChange={handleNameChange}
              sx={{ minWidth: 40 + "%" }}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              // value={name}
              // onChange={handleNameChange}
              sx={{ minWidth: 40 + "%" }}
            />
          </Stack>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            className="pel"
            // value={name}
            // onChange={handleNameChange}
            sx={{ minWidth: 80 + "%" }}
          />
        </Grid>

        <Grid item xs={6} className="personal">
          <Typography variant="h5" algin="center">
            Add Products
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              // value={name}
              // onChange={handleNameChange}
              sx={{ minWidth: 40 + "%" }}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              // value={name}
              // onChange={handleNameChange}
              sx={{ minWidth: 40 + "%" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
