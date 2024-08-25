import Geography from "../../components/Geography";
import React from "react";
import Header from "../../components/Header";

function GeographyChart() {
  return (
    <div>
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} />

      <Geography />
    </div>
  );
}

export default GeographyChart;
