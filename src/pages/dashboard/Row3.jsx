import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../components/Pie";
import Bar from "../../components/Bar";

import React from "react";
import Geography from "../../components/Geography";

function Row3() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"}  gap={1} mt={2}>
      <Paper  sx={{flexGrow:1,minWidth:"300px" , width: "28%" }}  >
        <Typography
          color={theme.palette.secondary.main}
          mb={1}
          mt={2}
          ml={4}
          variant="h6"
        >
          Campaign
        </Typography>

        <Pie isDashboard={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>

        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{flexGrow:1,minWidth:"300px", width: "33%" }}>
      <Typography
          color={theme.palette.secondary.main}
          mb={1}
          mt={2}
          ml={4}
          variant="h6"
        >
          Sales Quantity
        </Typography>

        <Bar isDashboard={true} />
      </Paper>


      <Paper sx={{flexGrow:1,minWidth:"300px", width: "33%" }}>
      <Typography
          color={theme.palette.secondary.main}
          mb={1}
          mt={2}
          ml={4}
          variant="h6"
        >
          Geography Based Traffic
        </Typography>

        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
}

export default Row3;
