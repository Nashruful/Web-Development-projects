import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Nashruful";
const yourPassword = "Oo6262665";
const yourAPIKey = "5cb753ce-aa76-434c-ae46-725ef3a75a65";
const yourBearerToken = "9e67ffd6-fbdc-4f9b-a4f5-6120b28063d3";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs",{content: JSON.stringify(result.data)});

  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }

});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all&page=1", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {content : JSON.stringify(result.data)});
  } catch (error){
    res.status(404).send("Error: ", error.message);
  }

});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: { score: 5, apiKey: yourAPIKey, }
    });
    res.render("index.ejs", {content : JSON.stringify(result.data)});
  } catch (error){
    res.status(404).send("Error: ", error.message);
  }
});
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}`},
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", {content : JSON.stringify(result.data)});
  } catch (error){
    res.status(404).send("Error: ", error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
