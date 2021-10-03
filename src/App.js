import Navbar from "./components/navbar/navbar";
import "./App.css"
import Banner from "./components/banner/banner";
import Poster from "./components/poster/poster";
import {api_key, base} from "../src/constatnts"
function App() {
    console.log(api_key);
    return (

        <div className="App">
            <Navbar/>
            <Banner/>
            <Poster link={
                    `${base}/discover/tv?api_key=${api_key}&with_networks=213
`
                }
                title="Netflix Originals"
                status={true}/>
            <Poster status={false}
                link={
                    `${base}/trending/all/week?api_key=${api_key}&language=en-US`
                }
                title="Action"/>
            <Poster status={false}
                link={
                    `${base}/discover/movie?api_key=${api_key}&with_genres=27`
                }
                title="horror"/>
            <Poster status={false}
                link={
                    `${base}/discover/movie?api_key=${api_key}&with_genres=35`
                }
                title="ComedyMovies"/>
            <Poster status={false}
                link={
                    `${base}/discover/movie?api_key=${api_key}&with_genres=10749`
                }
                title="RomanceMovies"/>
            <Poster status={false}
                link={
                    `${base}/discover/movie?api_key=${api_key}&with_genres=99`
                }
                title="Documentaries"/>

        </div>
    );
}

export default App;
// 'https://api.themoviedb.org/3/trending/all/week?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&language=en-US'
