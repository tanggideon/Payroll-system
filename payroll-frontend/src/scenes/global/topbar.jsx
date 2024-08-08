import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useNavigate} from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate()

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1, color:`${colors.greenAccent[400]}`}}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>
      <Box display="flex" >
        <IconButton onClick={colorMode.toggleColorMode} sx={{color:`${colors.greenAccent[400]}`}}> 
          {theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton sx={{color:`${colors.greenAccent[400]}`}} onClick={()=>{
          navigate("/notifications")
        }}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton sx={{color:`${colors.greenAccent[400]}`}} onClick={()=>{
          navigate("/settings")
        }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Box display="flex" alignItems="center" backgroundColor={colors.primary[400]} pr={1} borderRadius="5px">
        <IconButton sx={{color:`${colors.greenAccent[400]}`}}>
          <Person2OutlinedIcon />
        </IconButton>
        <Typography>Gideon Tang</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
