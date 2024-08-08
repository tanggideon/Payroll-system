import { Box } from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { IconButton, Typography, useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { notificationsData } from "../../data/mockData";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

const Notifications = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "date",
      headerName: "Date",
    },
    {
      field: "time",
      headerName: "Time",
    },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "request",
      headerName: "Request",
    },
    {
      field: "request_status",
      headerName: "Status",
      flex: 1,
      renderCell: ({row: {request_status}}) => {
        return <Box
        m="0 auto"
        height="100%"
        // justifyContent="center"
        alignItems="center"
        display="flex"
        >
            {request_status === "Pending" ? <DoNotDisturbOnOutlinedIcon sx={{color:`${colors.redAccent[400]}`}}/> : <CheckCircleOutlineOutlinedIcon sx={{color:`${colors.greenAccent[400]}`}}/>}
            <Typography>{request_status}</Typography>
        </Box>
      }
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="NOTIFICATIONS"
          subtitle="Staff Requests and All Notifications"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <DataGrid rows={notificationsData} columns={columns} />
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        ></Box>
      </Box>
    </Box>
  );
};

export default Notifications;
