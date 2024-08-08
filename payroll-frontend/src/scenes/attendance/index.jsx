import { Box } from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { IconButton, Typography, useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { attendanceData } from "../../data/mockData";

const Attendance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [{
    field: 'date', headerName: "Date"
},
{
    field: 'time', headerName: 'Time'
},
{
    field: "first_name", headerName: "First Name", flex: 1
},
{
    field: "last_name", headerName: "Last Name", flex: 1
},
{
    field: "status", headerName: "Status", flex: 1
},]
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ATTENDANCE" subtitle="Staff Attendance Page" />
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
          <DataGrid rows={attendanceData} columns={columns} />
        </Box>
        <Box gridColumn="span 5" backgroundColor={colors.primary[400]}></Box>
        <Box gridColumn="span 5" backgroundColor={colors.primary[400]}></Box>
        <Box gridColumn="span 5" backgroundColor={colors.primary[400]}></Box>
      </Box>
    </Box>
  );
};

export default Attendance;
