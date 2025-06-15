import React from "react";
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const trips = [
  {
    destination: "Paris",
    transport: "Flight",
    departureDate: "2024-09-15",
    returnDate: "2024-09-25",
    cost: "$1200",
    image: "https://images.pexels.com/photos/25915251/pexels-photo-25915251/free-photo-of-cielo-volador-azul-avion.jpeg?auto=compress&cs=tinysrgb&w=600", 
  },
  {
    destination: "New York",
    transport: "Cruise",
    departureDate: "2024-10-10",
    returnDate: "2024-10-20",
    cost: "$1500",
    image: "https://images.pexels.com/photos/2079450/pexels-photo-2079450.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    destination: "Tokyo",
    transport: "Flight",
    departureDate: "2024-11-05",
    returnDate: "2024-11-15",
    cost: "$2000",
    image: "https://images.pexels.com/photos/25915251/pexels-photo-25915251/free-photo-of-cielo-volador-azul-avion.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const handleBuyNow = (destination) => {
  alert(`You have selected the trip to ${destination}.`);
  // Aquí podrías integrar la funcionalidad de compra real
};

const Trips = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {trips.map((trip, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className="card" 
                style={{
                backgroundImage: `url(${trip.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "black",}}
                    >
            <CardContent>
              <Typography variant="h5" component="div">
                {trip.destination}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {trip.transport}
              </Typography>
              <Typography variant="body2">
                Departure: {trip.departureDate}
                <br />
                Return: {trip.returnDate}
                <br />
                Cost: {trip.cost}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" onClick={() => handleBuyNow(trip.destination)}>
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Trips;
