import { React, useEffect, useState } from "react";
import Content from "./Components/Content";
import Footer from "../Common/Footer";
import axios from "axios";
import { ProgramsAPI } from "../../Utils/services";

function Services() {
  // const servicesList = [
  //   {
  //     image:
  //       "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     alt: "a",
  //     title: "AA",
  //     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quod consequuntur, fugiat, qui ducimus ab, alias nesciunt dolorem est perferendis optio a corrupti rem iure? Magni necessitatibus similique totam quod, eum nulla. Ullam itaque provident illum quaerat et, delectus cupiditate earum voluptatibus perferendis. Ex dolorem odio ipsa itaque sapiente cum?",
  //     summary: "AAAAAAAAA",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     alt: "b",
  //     title: "BB",
  //     text: "BB",
  //     summary: "BBBBBBBBBBB",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     alt: "c",
  //     title: "CC",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cupiditate dolore id eaque recusandae exercitationem non tempore voluptate nisi alias iure officia dolor, molestiae necessitatibus placeat quasi ipsum nulla. Ipsam dolore sed totam. Iusto ullam commodi nostrum adipisci inventore nesciunt officiis cumque distinctio quod facere architecto modi dolore quos magnam numquam pariatur ex, asperiores provident ipsam unde minus quisquam quibusdam mollitia tenetur. Est placeat qui ipsa veritatis ullam nostrum soluta dolorem quis, earum excepturi ducimus, exercitationem modi ad. Natus, nobis magni. Quo repellendus explicabo consequuntur voluptas atque nostrum optio repudiandae modi fugiat illo vitae nobis voluptatem fuga necessitatibus ut animi veniam qui, facilis sunt minus. Tempora ullam id asperiores voluptatum totam aliquam quam ipsum, provident laudantium quibusdam corrupti tenetur facere? Vel earum voluptatum aliquid, magnam praesentium quis consequuntur ipsum ea ab sapiente consectetur, delectus omnis quod repellat eaque aut, suscipit expedita. Tempora eum a obcaecati explicabo optio officia maiores incidunt sequi culpa, dolorem, minima repellat quis. Modi aut laboriosam sunt deserunt aperiam, eaque rerum ipsam error sit iure amet numquam voluptate fuga quae, ratione possimus veniam accusantium inventore! Necessitatibus quam pariatur hic nulla eos magni dolorum, quos cumque rerum temporibus dignissimos nam porro quis. Deserunt modi assumenda ducimus veniam, minus dolorum repudiandae eius quas soluta alias explicabo voluptas aut blanditiis mollitia debitis magnam autem eos sint doloribus sit velit optio? Nisi voluptates quae ad? Iusto, sapiente incidunt odit, mollitia suscipit atque corporis beatae consequatur in maxime iste? Accusantium labore nesciunt, aspernatur veniam minima quam ut corporis magnam dicta ad dolorem aperiam incidunt asperiores, quibusdam iure cumque nulla odio beatae quae nihil numquam! Earum quos nisi provident aut, assumenda corrupti sint fuga et omnis! Ut quia libero commodi, nisi laudantium suscipit! Beatae quod modi at assumenda, hic voluptas. Ducimus consequuntur est, numquam quibusdam maiores quisquam. Nisi rerum eaque aliquid unde assumenda.",
  //     summary: "CCCCCCCC",
  //   },
  // ];

  const [programs, SetPrograms] = useState([]);
  const [init, SetInit] = useState(false);

  useEffect(() => {
    axios.get(ProgramsAPI).then((res) => {
      if (!init) {
        SetPrograms(res.data);
        SetInit(true);
      }

      // console.log(programs);
    });
  });

  return (
    <div>
      <Content props={programs} />
      <Footer />
    </div>
  );
}

export default Services;
