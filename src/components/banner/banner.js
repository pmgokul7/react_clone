import React, { Component } from 'react'
import axios from 'axios';
import "./banner.css"
class Banner extends React.Component {
    state={
        data:[]
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&language=en-US').then((res)=>{
            console.log(res.data.results);
            this.setState({data:res.data.results[10]})
        })
    }
    render() { 
        return <div className="banner" style={{backgroundImage:`url(${"https://image.tmdb.org/t/p/original"+this.state.data.backdrop_path})`}}>
            
           <div className="banner_container">
           <h1>{this.state.data.original_title}</h1>
         <div className="banner_buttons">
             <button>Play</button><button>My list</button>
         </div>
         <p className="dis">{this.state.data.overview}</p>
           </div>
       


        </div>;
    }
}
 
export default Banner;