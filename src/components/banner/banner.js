import React, { Component } from 'react'
import axios from 'axios';
import "./banner.css"
class Banner extends Component {
    state={
        data:[]
    }
   
    componentDidMount(){
        var i = Math.floor(Math.random() * 20);
        console.log("ran "+i);
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&language=en-US').then((res)=>{
            console.log(res.data.results);
            this.setState({data:res.data.results[i]})

        })
    }
    
    render() { 
        const {data}=this.state;
        return <div className="banner" style={{backgroundImage:`url(${"https://image.tmdb.org/t/p/original"+data.backdrop_path})`}}>
            
           <div className="banner_container">
               <h1>{data.original_title}</h1>
                 <div className="banner_buttons">
                        <button>Play</button><button>My list</button>
                 </div>
                     <p className="dis">{data.overview}</p>
           </div>
        </div>;
    }
}
 
export default Banner;
       
      
        

