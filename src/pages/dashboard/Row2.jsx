import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../components/Line";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import React from "react";
import { transactions } from "./data";

function Row2() {
  const theme = useTheme();

  return (
    <div>
      <Stack direction={"row"} flexWrap={"wrap"} mt={2} gap={1}>
        <Paper sx={{ width:900, flexGrow: 1 }}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
              >
                Revenue Generated
              </Typography>
              <Typography variant="body2" ml={4}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlinedIcon />
              </IconButton>
            </Box>
          </Stack>
          <Line isDashboard={true} />
        </Paper>

        <Box
          sx={{
            overflow:"auto",
            flexGrow: 1,
            minWidth: 280,
            maxHeight:380
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>

{transactions.map((item) => {
  return(
    <Paper
    sx={{
      mt: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Box p={1.2}>
      <Typography variant="body1" fontWeight="600">
        {item.txId}
      </Typography>

      <Typography variant="body2">{item.user} </Typography>
    </Box>

    <Typography variant="body1"> {item.date}</Typography>

    <Typography
      borderRadius={1.4}
      p={1}
      bgcolor={theme.palette.error.main}
      color={theme.palette.getContrastText(theme.palette.error.main)}
      variant="body2"
    >
      {item.cost}
    </Typography>
  </Paper>
  )
}
)}

          <Paper
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box p={1.2}>
              <Typography variant="body1" fontWeight="600">
                test 1
              </Typography>

              <Typography variant="body2">test 2 </Typography>
            </Box>

            <Typography variant="body1"> gggg</Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              $111
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </div>
  );
}

export default Row2;
