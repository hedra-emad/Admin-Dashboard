import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, Button, Stack  } from "@mui/material";
import Header from "../../components/Header";

function Dashboard() {

  return (
    <Stack direction={"column"}>
     
     <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
     <Header title={"DASHBOARD"} subTitle={"Welcome to your dashboard"} isDashboard={true}/>
     
     <Box sx={{ textAlign: "right", mb: 1.5 }}>
       <Button variant="contained" sx={{ textTransform: "capitalize" }}>
         <DownloadOutlinedIcon />
         Download Reports
       </Button>
     </Box>

     </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </Stack>
  );
}

export default Dashboard;
