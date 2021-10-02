import React, { Component } from 'react';

import axios from 'axios';
import "./poster.css"
class Poster extends React.Component {
    state={data:[]
    }
    
    
    componentDidMount(){
        axios.get(this.props.link
        ).then((res)=>{
        console.log(res.data.results);
        this.setState({data:res.data.results})
        })
    }
   

    
    render() { 
        return <div className="poster">
          
           <h1>{this.props.title}</h1>
           <div className="posters">
               {this.state.data.map((obj)=><img onClick={()=>this.onc(obj.id)} className={this.props.status ? "big" : "small" } src={`${'https://image.tmdb.org/t/p/original'+obj.backdrop_path}`} alt="" />
                   
                   
               )}
                  
                  
           </div>


        </div>;
    }
}
 
export default Poster;