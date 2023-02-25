import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

const BlogCard = ({ props }) => {
  // console.log(typeof props);
  const cardList = props.map((item) => {
    return (
      <Card
        key={props.indexOf(item)}
        sx={{
          maxWidth: 400,
          minHeight: 500,
          padding: "1.5rem 2rem 0",
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
        <Box sx={{ mt: "0.5rem" }}>
          <div>
            <p>{item.caption}</p>
          </div>
          <hr
            style={{
              backgroundColor: "black",
              borderColor: "black",
              height: "1px",
              width: "100%",
              margin: "1rem 0 0.5rem",
            }}
          />
          <p className="comments">00/00/00 - 10 Comments</p>
        </Box>
      </Card>
    );
  });

  return <div className="blogsCard">{cardList}</div>;
};

export default BlogCard;
