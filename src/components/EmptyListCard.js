import { Button, Card, CardContent, CardHeader } from "@mui/material";

const EmptyListCard = (props) => {
  return (
    <Card sx={{ maxWidth: "sm", my: 1 }}>
      <CardHeader
        title={props.title}
        sx={{
          color: "primary.main",
        }}
      />
      <CardContent>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={props.addTrip}
        >
          {props.text}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmptyListCard;
