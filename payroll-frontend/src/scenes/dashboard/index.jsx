import { Box } from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { IconButton, Typography, useTheme } from "@mui/material";
import BarChart from "../../components/barchart";
import PieChart from "../../components/piechart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Admin Dashboard" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box gridColumn="span 3" backgroundColor={colors.blueAccent[400]}>
          <Box
            m="20px"
            p="0 20px"
            width="70%"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              15
            </Typography>
            <Typography
              variant="h4"
              color={colors.grey[100]}
              sx={{
                fontWeight: "bold",
                letterSpacing: "3px",
                padding: "5px 0",
              }}
            >
              Total Staff
            </Typography>
          </Box>
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.greenAccent[400]}>
          <Box
            m="20px"
            p="0 20px"
            width="70%"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              3548.25
            </Typography>
            <Typography
              variant="h4"
              color={colors.grey[100]}
              sx={{
                fontWeight: "bold",
                letterSpacing: "3px",
                padding: "5px 0",
              }}
            >
              Total Salary
            </Typography>
          </Box>
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.redAccent[400]}>
          <Box
            m="20px"
            p="0 20px"
            width="70%"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              759.85
            </Typography>
            <Typography
              variant="h4"
              color={colors.grey[100]}
              sx={{
                fontWeight: "bold",
                letterSpacing: "3px",
                padding: "5px 0",
              }}
            >
              Total Tax Payable
            </Typography>
          </Box>
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]}>
          <Box
            m="20px"
            p="0 20px"
            width="70%"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              9
            </Typography>
            <Typography
              variant="h4"
              color={colors.grey[100]}
              sx={{
                fontWeight: "bold",
                letterSpacing: "3px",
                padding: "5px 0",
              }}
            >
              Av. Working Hours
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
            <BarChart/>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
            <PieChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
