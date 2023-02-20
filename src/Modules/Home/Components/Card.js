import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

const ServiceCard = (props) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400, minHeight: 600 }}>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            itaque temporibus voluptas soluta ipsam nemo nostrum, vero hic
            dignissimos reprehenderit neque! Doloremque libero perferendis
            cumque voluptatem reprehenderit nam tempora facere?
          </p>
        </div>
        <div className="serviceBtn">
          <button>Explore</button>
        </div>
      </Box>
    </Card>
  );
};

export default ServiceCard;
