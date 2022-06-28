import { AppBar, Toolbar, Typography } from "@mui/material";
import TripList from "./TripList";
import AddTripForm from "./AddTripForm";
import { useEffect, useState } from "react";
import MenuDrawer from "./MenuDrawer";
import useFetch from "../hooks/useFetch";

const UserMainView = () => {
  const [openAddTrip, setOpenAddTrip] = useState(false);

  const addTripHandler = () => {
    setOpenAddTrip(true);
  };
  const cancelAddTripHandler = () => {
    setOpenAddTrip(false);
  };

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
      {!openAddTrip && <TripList handleAddTrip={addTripHandler} />}
      {openAddTrip && <AddTripForm handleCancel={cancelAddTripHandler} />}
    </div>
  );
};

export default UserMainView;
