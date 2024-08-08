import { Box } from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { IconButton, Typography, useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { analyticsData } from "../../data/mockData";
import LineChart from "../../components/linechart";
import ApexLineChart from "../../components/apexlinechart";

const Analytics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [{
    field: 'date', headerName: "Date"
},
{
    field: "number_of_staff_present", headerName: "Staff Present", flex: 1
},
{
    field: "average_working_hours", headerName: "Av. Working Hours", flex: 1
},
{
    field: "average_overtime_hours", headerName: "Overtime Hours", flex: 1
},
]
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="ANALYTICS"
          subtitle="View Analytics of Staff and Others"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          sx={{
            "& .MuiDataGrid-root": {
                border: "none"
            },
            "& .MuiDataGrid-columnHeader": {
                backgroundColor: colors.blueAccent[700],
            }
        }}
        >
          <DataGrid rows={analyticsData} columns={columns} />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        ></Box>
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <ApexLineChart/>
          {/* <LineChart/> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;
