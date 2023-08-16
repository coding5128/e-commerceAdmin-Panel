import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InputAdornment from "@mui/material/InputAdornment";

import React from "react";
import {
  collection,
  updateDoc,
  doc,
  addDoc,
  getDocs,
  get,
} from "firebase/firestore";
import { db } from "../../Firebase-config";
import Swal from "sweetalert2";
import { useAppStore } from "../../appstore";

export default function EditProducts({ fid, CloseEvent }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "Products");

  useEffect(() => {
    console.log("FID:" + fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const createUser = async () => {
    const userDoc = doc(db, "Products", fid.id);
    const newFields = {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    };
    await updateDoc(userDoc, newFields);
    getUsers();
    CloseEvent();
    Swal.fire("submitted", "Your file has been updated.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const currencies = [
    {
      value: "moblie",
      label: "moblie",
    },
    {
      value: "laptop",
      label: "laptop",
    },
    {
      value: "Cooler",
      label: "Cooler",
    },
    {
      value: "Ac",
      label: "Ac",
    },
  ];

  return (
    <div>
      <div>
        <Box sx={{ m: 2 }} />
        <Typography variant="h5" algin="center">
          Edit Products
        </Typography>
        <IconButton
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={CloseEvent}
        >
          <CloseIcon />
        </IconButton>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              value={name}
              onChange={handleNameChange}
              sx={{ minWidth: 100 + "%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              type="number"
              value={price}
              onChange={handlePriceChange}
              sx={{ minWidth: 100 + "%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Category"
              size="small"
              variant="outlined"
              select
              value={category}
              onChange={handleCategoryChange}
              sx={{ minWidth: 100 + "%" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" algin="center">
              <Button variant="contained" onClick={createUser}>
                Submit
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ m: 4 }} />
      </div>
    </div>
  );
}
