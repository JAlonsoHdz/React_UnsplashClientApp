import React from "react";
import {Link} from 'react-router-dom';

const lowerPadding = {
    paddingBottom: '70px',
    
  };



class Card extends React.Component {
    
    
    render(){
        return(
            <div className="html ui top attached segment" style={lowerPadding}>
                <div className="ui link cards">              
                        
                        
                        <div className="ui centered card">
                            <Link to="/youtubeapp" exact className="image">
                            
                                <img src="https://images.unsplash.com/photo-1548328928-34db1c5fcc1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=794&q=80" />
                            </Link>
                            <div className="content">
                            <Link to="/youtubeapp" exact className="header">YouTube Video Serach App</Link>
                            <div className="meta">
                                <a>React</a>
                            </div>
                            <Link to="/youtubeapp" exact className="description">
                                React app that allows you to search YouTube Videos.
                            </Link>
                            </div>
                            <Link to="/youtubeapp" exact className="extra content">
                            <span className="right floated ui top attached error message">
                                Completed
                            </span>
                            <span>
                                <i className="user icon"></i>
                                1175 Friends
                            </span>
                            </Link>
                        </div>
                        

                        
                        <div className="ui centered card">
                            <Link to="/search" exact className="image">
                                <img src="https://images.unsplash.com/photo-1485282569499-bc24811e75ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=794&q=80" />
                            </Link> 
                            <div className="content">
                            <Link to="/search" exact className="header">Unsplash App</Link>
                            <div className="meta">
                                <a>React</a>
                            </div>
                            <Link to="/search" exact className="description">
                                React app that allows you to search images from unsplash api library.
                            </Link>
                            </div>
                            <Link to="/search" exact className="extra content">
                            <span className="right floated ui top attached error message">
                            Completed
                            </span>
                            <span>
                                <i className="user icon"></i>
                                1175 
                            </span>
                            </Link>
                        </div>         
                       

                
                        <div className="ui centered card">
                            <Link to="//springweo.herokuapp.com" exact className="image" target="_blank" >
                                <img src="https://3yecy51kdipx3blyi37oute1-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/spring-boot-java.jpg" />
                            </Link> 
                            <div className="content">
                            <Link to="//springweo.herokuapp.com" exact className="header" target="_blank" >Spring boot + bootstrap webapp</Link>
                            <div className="meta">
                                <a>React</a>
                            </div>
                            <Link to="//springweo.herokuapp.com" exact className="description" target="_blank" >
                                This is a task manager app that allows to perform CRUD operations on a MySql database
                            </Link>
                            </div>
                            <Link to="//springweo.herokuapp.com" exact className="extra content" target="_blank" >
                            <span className="right floated ui top attached error message">
                                Completed
                            </span>
                            <span>
                                <i className="user icon"></i>
                                1175 
                            </span>
                            </Link>
                        </div>    
                    

                    <div className="ui centered card">
                        <div className="image"> 
                            <img src="https://cdn-images-1.medium.com/max/1600/1*cMyXhbaUYCJwjYG3nNrImw.jpeg" />
                        </div> 
                        <div className="content">
                        <div className="header">React/Redux Video Streaming App</div>
                        <div className="meta">
                            <a>React</a>
                        </div>
                        <div className="description">
                            This is an SPA app that will allow to replicate a video streamings service. It includes basic CRUD operations.
                        </div>
                        </div>
                        <div className="extra content">
                        <span className="right floated ui top attached success message">
                            In progress
                        </span>
                        <span>
                            <i className="user icon"></i>
                            1175 
                        </span>
                        </div>
                    </div> 
                   
                </div>                  
            </div>

            
        );
    }

        
}

export default Card;