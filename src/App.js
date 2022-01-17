import React from "react";
import requests from "./requests";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />

      <Banner />
      <Row
        title=" NETFLIX ORIGINAL "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title=" Trending Now " fetchUrl={requests.fetchTrending} />
      <Row title=" Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title=" Acction Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title=" Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" Romance  " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="  Documentaries " fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
