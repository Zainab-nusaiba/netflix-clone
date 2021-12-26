import React from 'react'
import './App.css';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">

      {/* component1 : Navbar */}
      {/* component2 : Banner */}
      {/* component3 : Row-reusing from our Row.js file */}

      <Nav />
      <Banner />

      <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow //default is ={true} hence omitting
      />
      <Row title = "Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;

 