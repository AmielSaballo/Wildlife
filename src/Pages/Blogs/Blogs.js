import React from "react";
import Footer from "../Common/Footer";
import Content from "./Components/Content";

function Blogs() {
  const blogsList = [
    {
      image:
        "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "a",
      title: "AA",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quod consequuntur, fugiat, qui ducimus ab, alias nesciunt dolorem est perferendis optio a corrupti rem iure? Magni necessitatibus similique totam quod, eum nulla. Ullam itaque provident illum quaerat et, delectus cupiditate earum voluptatibus perferendis. Ex dolorem odio ipsa itaque sapiente cum?",
      summary: "AAAAAAAAA",
      author: "ME",
      datePosted: "00/00/0000",
    },
    {
      image:
        "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "b",
      title: "BB",
      content: "BB",
      summary: "BBBBBBBBBBB",
      author: "Mario",
      datePosted: "00/00/0000",
    },
    {
      image:
        "https://images.pexels.com/photos/7018141/pexels-photo-7018141.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "c",
      title: "CC",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cupiditate dolore id eaque recusandae exercitationem non tempore voluptate nisi alias iure officia dolor, molestiae necessitatibus placeat quasi ipsum nulla. Ipsam dolore sed totam. Iusto ullam commodi nostrum adipisci inventore nesciunt officiis cumque distinctio quod facere architecto modi dolore quos magnam numquam pariatur ex, asperiores provident ipsam unde minus quisquam quibusdam mollitia tenetur. Est placeat qui ipsa veritatis ullam nostrum soluta dolorem quis, earum excepturi ducimus, exercitationem modi ad. Natus, nobis magni. Quo repellendus explicabo consequuntur voluptas atque nostrum optio repudiandae modi fugiat illo vitae nobis voluptatem fuga necessitatibus ut animi veniam qui, facilis sunt minus. Tempora ullam id asperiores voluptatum totam aliquam quam ipsum, provident laudantium quibusdam corrupti tenetur facere? Vel earum voluptatum aliquid, magnam praesentium quis consequuntur ipsum ea ab sapiente consectetur, delectus omnis quod repellat eaque aut, suscipit expedita. Tempora eum a obcaecati explicabo optio officia maiores incidunt sequi culpa, dolorem, minima repellat quis. Modi aut laboriosam sunt deserunt aperiam, eaque rerum ipsam error sit iure amet numquam voluptate fuga quae, ratione possimus veniam accusantium inventore! Necessitatibus quam pariatur hic nulla eos magni dolorum, quos cumque rerum temporibus dignissimos nam porro quis. Deserunt modi assumenda ducimus veniam, minus dolorum repudiandae eius quas soluta alias explicabo voluptas aut blanditiis mollitia debitis magnam autem eos sint doloribus sit velit optio? Nisi voluptates quae ad? Iusto, sapiente incidunt odit, mollitia suscipit atque corporis beatae consequatur in maxime iste? Accusantium labore nesciunt, aspernatur veniam minima quam ut corporis magnam dicta ad dolorem aperiam incidunt asperiores, quibusdam iure cumque nulla odio beatae quae nihil numquam! Earum quos nisi provident aut, assumenda corrupti sint fuga et omnis! Ut quia libero commodi, nisi laudantium suscipit! Beatae quod modi at assumenda, hic voluptas. Ducimus consequuntur est, numquam quibusdam maiores quisquam. Nisi rerum eaque aliquid unde assumenda.",
      summary: "CCCCCCCC",
      author: "A",
      datePosted: "00/00/0000",
    },
  ];

  const topBlogs = [
    {
      image:
        "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "A",
      title: "A",
      summary: "AAAAAAAAAAAAAAAAA",
    },
    {
      image:
        "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "B",
      title: "B",
      summary: "BBBBBBBBBBBBBBBBBBB",
    },
    {
      image:
        "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "C",
      title: "C",
      summary: "CCCCCCCCCCCCCCCCCCCCCCCC",
    },
  ];
  return (
    <div>
      <Content props={blogsList} topBlogs={topBlogs} />
      <Footer />
    </div>
  );
}

export default Blogs;
