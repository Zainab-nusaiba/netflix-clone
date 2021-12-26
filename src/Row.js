import React,{ useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios.js';
import "./Row.css";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) { 
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //make a requests to tmdb for the image/poster everytime the row loads
    useEffect(() => { 
        //if [],run once when the row loads, and don't run again
        async function fetchData() { 
            const request = await axios.get(fetchUrl);
            // 'http://api.themoviedb.org/3'concatenating wid requests.js urls 

            setMovies(request.data.results);//inside our arr
            return request;
        }
        fetchData();
        //if there is any variable pulled from outside the useEffect we for sure havve put it inside the[] below cuz it's a dependency now 
    }, [fetchUrl]);

    console.log(movies);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoPlay: 1,
        },
    };

    const handleClick = (movie) => {
        //when the user clicks on the picture 
        //onClick={() => handleClick(movie)} does this from below
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    //eg. https://youtu.be/yGY484EPe5U - v need only yGY484EPe5U
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                {/* container -> posters */}
                {/* inside a container to scroll */}

                {movies.map((movie) => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} //row__poster for everything but if isLargeRow den row__posterLarge
                    src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row;

 