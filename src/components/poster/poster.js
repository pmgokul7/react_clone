import React, {Component} from 'react';

import axios from 'axios';
import "./poster.css"
class Poster extends React.Component {
    state = {
        data: []
    }


    componentDidMount() {
        const {link} = this.props;
        axios.get(link).then((res) => {
            this.setState({data: res.data.results})
        })
    }


    render() {
        const {data} = this.state;
        const {status,title}=this.props;
        return <div className="poster">

            <h1>{title }</h1>
             <div className="posters">
               
                { data.map((obj) =>< img className = {status ? "big" : "small"}  src = {`${'https://image.tmdb.org/t/p/original' + obj.backdrop_path}`} alt = "poster" />)}
                                   
            </div>
        </div>;
    }
}

export default Poster;             
                    
             
            

                


