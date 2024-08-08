import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import AppSidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import AllStaff from "./scenes/allStaff";
import Accounts from "./scenes/accounts";
import Payslips from "./scenes/payslips";
import Advances from "./scenes/advances";
import Allowances from "./scenes/allowances";
import Analytics from "./scenes/analytics";
import Attendance from "./scenes/attendance";
import Notifications from "./scenes/notifications";
import Summaries from "./scenes/summaries";
import Settings from "./scenes/settings";
import Calendar from "./scenes/calendar";


function App() {
  const [theme, colorMode] = useMode();
  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <AppSidebar />
          <main className="content">
            
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/analytics" element={<Analytics />}/>
              <Route path="/staff" element={<AllStaff />}/>
              <Route path="/attendance" element={<Attendance />}/>
              <Route path="/notifications" element={<Notifications />}/>
              <Route path="/payslips" element={<Payslips />}/>
              <Route path="/advances" element={<Advances />}/>
              <Route path="/allowances" element={<Allowances />}/>
              <Route path="/accounts" element={<Accounts />}/>
              <Route path="/summaries" element={<Summaries />}/>
              <Route path="/settings" element={<Settings />}/>
              <Route path="/calendar" element={<Calendar />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
