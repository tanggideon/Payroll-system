import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import CommentBankOutlinedIcon from "@mui/icons-material/CommentBankOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      style={{ color: color.grey[100] }}
      onClick={() => {
        setSelected(title);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      
    </MenuItem>
  );
};

const AppSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    height="100vh"
    sx={
      {
        "& .ps-sidebar-root": {
          height: "100%"
        },
        "& .ps-menu-button": {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .ps-menu-button:hover": {
          backgroundColor: `${colors.primary[400]} !important`,
          color: `${colors.greenAccent[400]} !important`
        },
        "& .ps-sidebar-container": {
          backgroundColor: `${colors.primary[400]}`,
        },
        "& .ps-menu-icon": {
          color: `${colors.greenAccent[400]}`,
        },
        "& .ps-active": {
          color: `${colors.greenAccent[400]} !important`
        }
      }
    }
    >
    <Sidebar
      collapsed={isCollapsed}
    >
      <Menu>
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: `${colors.grey[100]}`,
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4" color={colors.grey[100]}>
                PayGenie
              </Typography>
              <IconButton aria-label="" onClick={() => {}}>
                <MenuOpenOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        <Box paddingLeft={isCollapsed ? undefined : "5%"}>
          {!isCollapsed && (
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              General
            </Typography>
          )}

          <Item
            title="Dashboard"
            to="/"
            icon={<DashboardOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Analytics"
            to="/analytics"
            icon={<AnalyticsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          {!isCollapsed && (
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Human Resource
            </Typography>
          )}
          <SubMenu label="Manage Staff" icon={<PeopleAltOutlinedIcon />}>
            <Item
              title="All Staff"
              to="/staff"
              icon={<PeopleAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Attendance"
              to="/attendance"
              icon={<CoPresentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/notifications"
              icon={<NotificationsNoneOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>
          <SubMenu label="Salary" icon={<PaymentsOutlinedIcon />}>
            <Item
              title="Payslips"
              to="/payslips"
              icon={<RequestQuoteOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Advances"
              to="/advances"
              icon={<WatchLaterOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Allowances"
              to="/allowances"
              icon={<CurrencyExchangeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>

          {!isCollapsed && (
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Others
            </Typography>
          )}
          <Item
            title="Accounts"
            to="/accounts"
            icon={<CommentBankOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Summaries"
            to="/summaries"
            icon={<SummarizeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarMonthOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
    </Box>
  );
};

export default AppSidebar;
