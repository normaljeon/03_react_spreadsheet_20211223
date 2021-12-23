import React, { useState, useRef } from "react";
const { GoogleSpreadsheet } = require("google-spreadsheet");

import "../styles.css";

const GoogleSpread = () => {
  const doc = new GoogleSpreadsheet(
    "https://docs.google.com/spreadsheets/d/1LKU8PEF3mJnq9FoUds6XYUwIrJbh-nj8pjfZaayKjtU/edit#gid=0"
  );

  return <>dd</>;
};

export default GoogleSpread;
