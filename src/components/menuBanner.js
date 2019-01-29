import React from 'react';
import {Link} from 'react-router-dom';
import './menuBanner.css';


class MenuBanner extends React.Component {

    render(){
        var library = {
            display: "block",
            fontSize: "1.75m",
            fontWeight: "bold",
            color:"black"
        }

        var myVideo = {
            position: "fixed",
            right: 0,
            bottom: 0,
            minWidth: "100%", 
            minHeight: "100%",
            width: "auto",
            height: "auto"
            
        }

        return(
            
           
            <div className='masthead segment bg3'>
                <div className="ui container">
                        <video muted="" style={myVideo} autoplay="autoplay" loop="loop" >
                            <source src="/intro_normalSpeed.mp4" type="video/mp4" />
                        </video>
                    <div className="introduction">
                    
                        
                    
                        
                        <a className="ui black version label" href="#">
                            1.0
                        </a>
                        <h1 className="ui inverted header">
                            <span className='library'>
                            Alonso's portfolio
                            </span>
                            <span>
                            Unsplashed API client react app
                            </span>

                            
                        </h1>
                        <div className="ui hidden divider"></div>
                        
                        <Link to="/search" className="ui huge inverted download button">
                            Test it!
                        </Link>
                        <a href="/introduction/new.html" className="ui huge inverted basic button">Architecture</a>
                    </div>             
                </div>
             </div> 
        );
    }
}

export default MenuBanner;