import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

function Header({title,subTitle,isDashboard=false}) {
    const theme = useTheme();
  return (
    <div>
       <Box sx={{mb:isDashboard?2: 4}}>
        <Typography sx={{color:theme.palette.info.light , fontWeight:"bold"}} variant="h5" >{title}</Typography>

        <Typography variant="body1">{subTitle}</Typography>
      </Box>
    </div>
  )
}

export default Header
