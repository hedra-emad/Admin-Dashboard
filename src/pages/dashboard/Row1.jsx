import { Paper, Stack, Typography, useTheme } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "../../components/Card";
import { data1, data2, data3, data4 } from "./data";

function Row1() {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <MailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,000"}
        subTitle={"Emails Sent"}
        chartTitle={"+14%"}
        data={data1}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,000"}
        subTitle={"Sales Obtained"}
        chartTitle={"+21%"}
        data={data2}
        scheme={"dark2"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,000"}
        subTitle={"New Clients"}
        chartTitle={"+5%"}
        data={data3}
        scheme={"category10"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,000"}
        subTitle={"Traffic Recieved"}
        chartTitle={"+43%"}
        data={data4}
        scheme={"paired"}
      />
    </Stack>
  );
}

export default Row1;
