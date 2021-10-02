import Navbar from "./components/navbar/navbar";
import "./App.css"
import Banner from "./components/banner/banner";
import Poster from "./components/poster/poster";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Poster link="https://api.themoviedb.org/3/discover/tv?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&with_networks=213
" title="Netflix Originals" status={true}/>
      <Poster status={false} link="https://api.themoviedb.org/3/trending/all/week?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&language=en-US" title="Action"/>
      <Poster status={false} link="https://api.themoviedb.org/3/discover/movie?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&with_genres=27" title="horror"/>
      <Poster status={false} link="https://api.themoviedb.org/3/discover/movie?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&with_genres=35" title="ComedyMovies"/>
    </div>
  );
}

export default App;
  //'https://api.themoviedb.org/3/trending/all/week?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&language=en-US'






  