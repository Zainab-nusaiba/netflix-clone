import React,{useState, useEffect} from 'react'
import axios from './axios.js'
import requests from './requests.js';
import './Banner.css';

function Banner() {
    const [movie,setMovie] = useState([]);

    //logic - gives a new movie banner whenever refreshed
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div class="banner__buttons">
                    <button class="banner__button">Play</button>
                    <button class="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>

            </div>
            {/* Background image */}
            {/* title */}
            {/* div > 2 buttons - Play & My List */}
            {/* truncated description very useful */}

            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner
