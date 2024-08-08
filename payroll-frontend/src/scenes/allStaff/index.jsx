import Header from "../../components/header";
import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { allStaff } from "../../data/mockData";

const AllStaff = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [{
        field: 'id', headerName: "ID"
    },
    {
        field: "first_name", headerName: "First Name"
    },
    {
        field: "last_name", headerName: "Last Name"
    },
    {
        field: "email", headerName: "Email", flex: 1
    },
    {
        field: "position", headerName: "Position", flex: 1
    },
    {
        field: "date_joined", headerName: "Date Joined"
    }
    ]
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ALL STAFF" subtitle="View and Manage Staff Details"/>
        </Box>
        <Box display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
            <Box gridColumn="span 4"  backgroundColor={colors.primary[400]}>

            </Box>
            <Box gridColumn="span 4"  backgroundColor={colors.primary[400]}>

            </Box>
            <Box gridColumn="span 4" gridRow="span 4" backgroundColor={colors.primary[400]}>

            </Box>
            <Box 
            gridColumn="span 8" 
            gridRow="span 3" 
            backgroundColor={colors.primary[400]}
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                }
            }}
            >
                <DataGrid 
                    rows={allStaff}
                    columns={columns}
                />
            </Box>

        </Box>
    </Box>
}

export default AllStaff;