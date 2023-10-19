import React, { useState } from 'react';
import './Home.css';
import Hobbit from '../Components/hobbit3.png';
import Hobbit3 from '../Components/hobbit2.png';
import Avatar from '../Components/avatar.png';
import Aladdin from '../Components/Aladdin.jpg';
import GodsofEgypt from '../Components/img1.png';
import axios from 'axios';

const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [name, setName] = useState('');

    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    const enterPressHandler = (e)=> {
        if(e.keyCode===13){
            axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: {
                    api_key: '4d1bbd25fb8a07cad810de1e4bffe639',
                    query: name
                }
            })
            .then(function (response) {
                setMoviesData(response.data.results);
            });
        }
        document.querySelector('.moviesContainer').style.display = 'none';
    }

    const inputHandler = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: '4d1bbd25fb8a07cad810de1e4bffe639',
                query: name
            }
        })
        .then(function (response) {
            setMoviesData(response.data.results);
        });
        document.querySelector('.moviesContainer').style.display = 'none';
    }

return (            
            <div className="app">
                <div className='appName'>
                    <h1 className="appName">Phoenix Movies</h1>
                </div>
                <div className="searchBarContainer">
                    <input type="text" className="searchBar" onChange={onChangeHandler} value={name} onKeyDown={enterPressHandler} placeholder="Search"/>
                    <button type='button' className='btn' onClick={inputHandler}>Search</button>
                </div>
                <div className="moviesContainer">
                    <div className="movie">
                        <div className="movieImage">
                            <a href="https://4kmovies.co/movies-4k/889-the-hobbit-the-desolation-of-smaug-4k-2013-extended.html"><img src={Hobbit} alt="The Hobbit The Desolation of Smaug 4K 2013 EXTENDED"/></a>
                            <div class="movieName">
			                    <a href="https://4kmovies.co/movies-4k/889-the-hobbit-the-desolation-of-smaug-4k-2013-extended.html">The Hobbit The Desolation of Smaug 4K 2013 EXTENDED</a>
		                    </div>
                        </div>
                    </div>
                    <div className="movie">
                        <div className="movieImage">
                            <a href="https://4kmovies.co/movies-4k/890-the-hobbit-the-battle-of-the-five-armies-4k-2014-extended.html"><img src={Hobbit3} alt="The Hobbit The Battle of the Five Armies 4K 2014 EXTENDED"/></a>
                            <div class="movieName">
			                    <a href="https://4kmovies.co/movies-4k/890-the-hobbit-the-battle-of-the-five-armies-4k-2014-extended.html">The Hobbit The Battle of the Five Armies 4K 2014 EXTENDED</a>
		                    </div>
                        </div>
                    </div>
                    <div className="movie">
                        <div className="movieImage">
                            <a href="https://4kmovies.co/movies-4k/1665-avatar-the-way-of-water-4k-2022.html"><img src={Avatar} alt="Avatar: The Way of Water 4K 2022"/></a>
                            <div class="movieName">
			                    <a href="https://4kmovies.co/movies-4k/1665-avatar-the-way-of-water-4k-2022.html">Avatar: The Way of Water 4K 2022</a>
		                    </div>
                        </div>
                    </div>
                    <div className="movie">
                        <div className="movieImage">
                            <a href="https://4kmovies.co/movies-4k/702-aladdin-4k-2019.html"><img src={Aladdin} alt="Aladdin 4K 2019"/></a>
                            <div class="movieName">
			                    <a href="https://4kmovies.co/movies-4k/702-aladdin-4k-2019.html">Aladdin 4K 2019</a>
		                    </div>
                        </div>
                    </div>
                    <div className="movie">
                        <div className="movieImage">
                            <a href="https://4kmovies.co/movies-4k/429-gods-of-egypt-4k-2016.html"><img src={GodsofEgypt} alt="Gods of Egypt 4K 2016"/></a>
                            <div class="movieName">
			                    <a href="https://4kmovies.co/movies-4k/429-gods-of-egypt-4k-2016.html">Gods of Egypt 4K 2016</a>
		                    </div>
                        </div> 
                    </div>
                </div>
                <div className="searchMoviesContainer">
                    {moviesData.map((value) =>
                        <div className='movie'>
                            <div className="movieImage">
                                <a href="https://4kmovies.co/">
                                    <img className="image1" src={`https://images.tmdb.org/t/p/w200${value.poster_path}`} alt={value.title} /> 
                                </a>
                                <div class="movieName">
			                        <a href="https://4kmovies.co/">{value.title}</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Home;