import Head from "next/head";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Results from "../components/Results.jsx";
import requests from "../utils/requests.js";
import GoTop from "../components/GoTop.jsx";
import Footer from "../components/Footer.jsx";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu-Clone-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 1 -- Header Component */}
      <Header />
      {/* 2 -- Navigation Component */}
      <Nav />
      {/* 3 -- Movies Result Component */}
      <Results results={results} />
      {/* {--Footer Components--} */}
      <Footer />
      {/* --GOTOP component */}
      <GoTop />
    </div>
  );
}

// { Functioning For Server Side Rendering Fetching Data From IMDB Database Logic}
//  Get Requet to tmdb server

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  // console.log("request.results",request.results);
  return {
    props: {
      results: request.results,
    },
  };
}
