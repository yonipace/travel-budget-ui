import {
  AppBar,
  Card,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FlightIcon from "@mui/icons-material/Flight";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TripList from "./TripList";
import AddTripForm from "./AddTripForm";
import { useEffect, useState } from "react";
import MenuDrawer from "./MenuDrawer";
import useFetch from "../hooks/useFetch";

const UserMainView = () => {
  const [openAddTrip, setOpenAddTrip] = useState(false);
  const [trips, setTrips] = useState([]);

  /*  useEffect(() => {
    const getTrips = async () => {
      const response = await fetch("http://localhost:8080/user?userId=1", {
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        setTrips(data);
      } else {
        const err = await response.json();
        throw new Error(err.message);
      }
    }; 
    
    getTrips().catch((error) => console.log(error.message));
  }, []);
  */
  const addTripHandler = () => {
    setOpenAddTrip(true);
  };
  const cancelAddTripHandler = () => {
    setOpenAddTrip(false);
  };
  const { response, loading } = useFetch("http://localhost:8080/user", {
    userId: 1,
  });
  useEffect(() => {
    console.log(response);
  }, []);
  return (
    <div>
      <AppBar sx={{ bgcolor: "primary.dark" }}>
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" sx={{ mx: 1 }}>
            Welcome!
          </Typography>
        </Toolbar>
      </AppBar>
      {!openAddTrip && (
        <TripList trips={trips} handleAddTrip={addTripHandler} />
      )}
      {openAddTrip && <AddTripForm handleCancel={cancelAddTripHandler} />}
    </div>
  );
};

export default UserMainView;

const dummyTrips = [
  {
    id: 1,
    city: "Xinghai",
    year: "2022-05",
    name: "Xinghai 2022-05",
    destination: "China",
    budget: 4535,
    total_spent: 781,
    start_date: "05/03/2021",
    end_date: "17/04/2022",
  },
  {
    id: 2,
    city: "Boliney",
    year: "2022-01",
    name: "Boliney 2022-01",
    destination: "Philippines",
    budget: 6096,
    total_spent: 591,
    start_date: "16/10/2021",
    end_date: "24/04/2022",
  },
  {
    id: 3,
    city: "Quintã",
    year: "2021-11",
    name: "Quintã 2021-11",
    destination: "Portugal",
    budget: 5238,
    total_spent: 887,
    start_date: "20/08/2021",
    end_date: "23/05/2022",
  },
  {
    id: 4,
    city: "Wujing",
    year: "2021-10",
    name: "Wujing 2021-10",
    destination: "China",
    budget: 5824,
    total_spent: 947,
    start_date: "24/06/2021",
    end_date: "17/06/2022",
  },
  {
    id: 5,
    city: "Mionica",
    year: "2022-01",
    name: "Mionica 2022-01",
    destination: "Bosnia and Herzegovina",
    budget: 6846,
    total_spent: 622,
    start_date: "17/09/2021",
    end_date: "08/04/2022",
  },
  {
    id: 6,
    city: "Kaustinen",
    year: "2022-06",
    name: "Kaustinen 2022-06",
    destination: "Finland",
    budget: 3452,
    total_spent: 263,
    start_date: "23/07/2021",
    end_date: "20/06/2022",
  },
  {
    id: 7,
    city: "Carmo do Paranaíba",
    year: "2022-05",
    name: "Carmo do Paranaíba 2022-05",
    destination: "Brazil",
    budget: 5530,
    total_spent: 824,
    start_date: "07/11/2021",
    end_date: "05/04/2022",
  },
  {
    id: 8,
    city: "Changyuan",
    year: "2021-07",
    name: "Changyuan 2021-07",
    destination: "China",
    budget: 9711,
    total_spent: 456,
    start_date: "16/04/2021",
    end_date: "02/05/2022",
  },
  {
    id: 9,
    city: "Outlook",
    year: "2021-07",
    name: "Outlook 2021-07",
    destination: "Canada",
    budget: 4203,
    total_spent: 102,
    start_date: "10/08/2021",
    end_date: "21/04/2022",
  },
  {
    id: 10,
    city: "Bairro",
    year: "2022-03",
    name: "Bairro 2022-03",
    destination: "Portugal",
    budget: 2162,
    total_spent: 605,
    start_date: "04/04/2021",
    end_date: "19/06/2022",
  },
];
