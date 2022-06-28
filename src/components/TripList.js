import { Container, Fab, Tooltip } from "@mui/material";
import React from "react";
import TripCard from "./TripCard";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const TripList = (props) => {
  return (
    <div>
      <Container sx={{ mt: 10 }}>
        {props.trips.map((trip) => (
          <TripCard data={trip} key={trip.id} />
        ))}
      </Container>
      <Tooltip title="add new trip">
        <Fab
          onClick={props.handleAddTrip}
          color="secondary"
          sx={{ position: "fixed", bottom: 16, right: 20 }}
          component={Link}
          to="/user/add-trip"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default TripList;
