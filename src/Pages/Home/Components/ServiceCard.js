import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

const ServiceCard = ({ props }) => {
  // console.log(typeof props);
  const cardList = props.map((item) => {
    return (
      <Card
        key={props.indexOf(item)}
        sx={{
          maxWidth: 400,
          minHeight: 600,
          padding: "1.5rem 2rem 0",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <h1>{item.name}</h1>
        <Box sx={{ textAlign: "center" }}>
          <div>
            <p>{item.caption}</p>
          </div>
          <div className="serviceBtn">
            <button>Explore</button>
          </div>
        </Box>
      </Card>
    );
  });

  return <div className="servicesCard">{cardList}</div>;
};

export default ServiceCard;
