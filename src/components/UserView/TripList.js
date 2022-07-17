import { Container, Fab, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import EmptyListCard from "../Layout/EmptyListCard";
import { useSelector } from "react-redux";

const TripList = (props) => {
  const [trips, setTrips] = useState([]);
  const token = useSelector((state) => state.authentication.token);

  const { error, sendRequest: getTripData } = useFetch();
  useEffect(() => {
    const updateTrips = (tripsObj) => {
      setTrips(tripsObj);
    };
    getTripData(
      {
        url: "http://localhost:8080/user",
        headers: {
          token: token,
        },
      },
      updateTrips
    );
  }, [getTripData, token]);

  if (trips.length > 0) {
    trips.map((trip) => <TripCard data={trip} key={trip.id} />);
  }

  return (
    <>
      <Container sx={{ mt: 10 }}>
        {trips.length > 0 ? (
          trips.map((trip) => <TripCard data={trip} key={trip.id} />)
        ) : (
          <EmptyListCard
            title="No Trips Found"
            text="add your first trip"
            addTrip={props.handleAddTrip}
          />
        )}
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
    </>
  );
};

export default TripList;
