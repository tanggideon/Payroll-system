import { Box } from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { IconButton, Typography, useTheme } from "@mui/material";

const Settings = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SETTINGS" subtitle="System Settings"/>
        </Box>
        <Box display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
            <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]}>

            </Box>
            <Box gridColumn="span 6" gridRow="span 3" backgroundColor={colors.primary[400]}>

            </Box>
            <Box gridColumn="span 6" backgroundColor={colors.primary[400]}>

            </Box>
        </Box>
    </Box>
}

export default Settings;