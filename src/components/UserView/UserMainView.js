import { AppBar, Toolbar, Typography } from "@mui/material";
import TripList from "./TripList";
import AddTripForm from "./AddTripForm";
import { useState } from "react";
import MenuDrawer from "../Layout/MenuDrawer";
import { useSelector } from "react-redux";

const UserMainView = () => {
  const [openAddTrip, setOpenAddTrip] = useState(false);
  const firstName = useSelector((state) => state.authentication.firstName);
  const lastName = useSelector((state) => state.authentication.lastName);

  const addTripHandler = () => {
    setOpenAddTrip(true);
  };
  const cancelAddTripHandler = () => {
    setOpenAddTrip(false);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" sx={{ mx: 1 }}>
            {firstName} {lastName}
          </Typography>
        </Toolbar>
      </AppBar>
      {!openAddTrip && <TripList handleAddTrip={addTripHandler} />}
      {openAddTrip && <AddTripForm handleCancel={cancelAddTripHandler} />}
    </div>
  );
};

export default UserMainView;
