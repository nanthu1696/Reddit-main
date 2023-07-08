import "../styles.css";
import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}
let data = [
  {
    postedBy: "Hank98",
    image: "https://loremflickr.com/640/480/business",
    title: "Ut quos accusamus ullam rem quisquam et quam.",
    votes: 8,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1003.jpg",
    community: "unde",
    postedOn: "Thursday",
    id: "1"
  },
  {
    postedBy: "Perry.Graham86",
    image: "https://loremflickr.com/640/480/people",
    title: "Voluptatum doloremque magni totam asperiores vero nihil.",
    votes: 52,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/729.jpg",
    community: "voluptatum",
    postedOn: "Monday",
    id: "2"
  },
  {
    postedBy: "Susana.Kreiger44",
    image: "https://loremflickr.com/640/480/nature",
    title: "Sint cumque sunt inventore.",
    votes: 71,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg",
    community: "quaerat",
    postedOn: "Sunday",
    id: "3"
  },
  {
    postedBy: "Coleman_Larkin",
    image: "https://loremflickr.com/640/480/fashion",
    title: "Consectetur repellat officia.",
    votes: 79,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg",
    community: "nam",
    postedOn: "Thursday",
    id: "4"
  },
  {
    postedBy: "Russ62",
    image: "https://loremflickr.com/640/480/animals",
    title: "Aliquam consequatur a sunt.",
    votes: 82,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg",
    community: "dignissimos",
    postedOn: "Thursday",
    id: "5"
  },
  {
    postedBy: "Jailyn_Davis29",
    image: "https://loremflickr.com/640/480/animals",
    title: "Sed pariatur aliquid amet praesentium facilis.",
    votes: 7,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg",
    community: "modi",
    postedOn: "Sunday",
    id: "6"
  },
  {
    postedBy: "Colin95",
    image: "https://loremflickr.com/640/480/nature",
    title: "Tempora quae illum tenetur maxime.",
    votes: 53,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/839.jpg",
    community: "quasi",
    postedOn: "Friday",
    id: "7"
  },
  {
    postedBy: "Jamaal.Jaskolski",
    image: "https://loremflickr.com/640/480/food",
    title:
      "Dicta quam incidunt suscipit dicta exercitationem accusantium quam quibusdam.",
    votes: 34,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg",
    community: "exercitationem",
    postedOn: "Wednesday",
    id: "8"
  },
  {
    postedBy: "Camila.Rolfson",
    image: "https://loremflickr.com/640/480/business",
    title: "Ipsum dolor id quam laboriosam.",
    votes: 63,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1218.jpg",
    community: "incidunt",
    postedOn: "Tuesday",
    id: "9"
  },
  {
    postedBy: "Gudrun_Kreiger",
    image: "https://loremflickr.com/640/480/transport",
    title: "A odio iure.",
    votes: 20,
    profile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg",
    community: "totam",
    postedOn: "Monday",
    id: "10"
  }
];

export async function loader() {
  let posts = data;
  return { posts };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  updateContact(updates);
  return redirect("/user1");
}
function updateContact(details) {
  console.log(details);
  let newObj = {
    postedBy: "user1",
    image: details.image,
    title: details.title,
    description: details.description,
    votes: 0,
    profile: "https://cdn.onlinewebfonts.com/svg/img_568657.png",
    community: "noCommunity",
    postedOn: "today",
    id: "1"
  };
  data = [newObj, ...data];
  console.log(data);
}
export async function popularLoader() {
  const posts = await fetch(
    "https://64a14b520079ce56e2daf1ca.mockapi.io/popular"
  ).then((res) => res.json());
  return { posts };
}

export async function gameLoader() {
  const posts = await fetch(
    "https://649fc00aed3c41bdd7a6a2de.mockapi.io/games"
  ).then((res) => res.json());
  return { posts };
}
export async function sportLoader() {
  const posts = await fetch(
    "https://64a062c4ed3c41bdd7a743fc.mockapi.io/sports"
  ).then((res) => res.json());
  return { posts };
}

export async function businessLoader() {
  const posts = await fetch(
    "https://64a062c4ed3c41bdd7a743fc.mockapi.io/business"
  ).then((res) => res.json());
  return { posts };
}

export async function cryptoLoader() {
  const posts = await fetch(
    "https://64a14b520079ce56e2daf1ca.mockapi.io/crypto"
  ).then((res) => res.json());
  return { posts };
}

export async function tvLoader() {
  const posts = await fetch(
    "https://64a14e6e0079ce56e2daf3f4.mockapi.io/tv"
  ).then((res) => res.json());
  return { posts };
}

export async function celebLoader() {
  const posts = await fetch(
    "https://64a14e6e0079ce56e2daf3f4.mockapi.io/celebrity"
  ).then((res) => res.json());
  return { posts };
}

export async function hotLoader() {
  const posts = await fetch(
    "https://64a1512f0079ce56e2daf712.mockapi.io/hot"
  ).then((res) => res.json());
  return { posts };
}
export async function newLoader() {
  const posts = await fetch(
    "https://64a1512f0079ce56e2daf712.mockapi.io/new"
  ).then((res) => res.json());
  return { posts };
}
export async function topLoader() {
  const posts = await fetch(
    "https://64a155080079ce56e2dafa14.mockapi.io/top"
  ).then((res) => res.json());
  return { posts };
}
export async function artLoader() {
  const posts = await fetch(
    "https://64a155080079ce56e2dafa14.mockapi.io/art"
  ).then((res) => res.json());
  return { posts };
}
