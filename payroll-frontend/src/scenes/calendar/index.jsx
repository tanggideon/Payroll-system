import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { attendanceData } from "../../data/mockData";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Enter Event Title:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Calendar" subtitle="Manage Calendar" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 9"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <FullCalendar
          height="100%"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events)=>{
            setCurrentEvents(events)
          }}
          initialEvents={[
            {id: "1", title: "Chrismas Day", date: "2024-12-25"},
            {id: "2", title: "New Year Day", date: "2025-01-01"}
          ]}
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          p="15px"
        >
          <Typography variant="h5">Events</Typography>
          <list>
            {currentEvents.map((events)=>(
              <ListItem
              key={events.id}
              sx={{backgroundColor: colors.greenAccent[500], margin: "10px 0"}}
              >
                <ListItemText
                  primary={events.title}
                  secondary={
                    <Typography>
                      {formatDate(events.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </list>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
