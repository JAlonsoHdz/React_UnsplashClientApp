import React from 'react';
import './menuBanner.css';


class MenuBanner extends React.Component {

    render(){
        var library = {
            display: "block",
            fontSize: "1.75m",
            fontWeight: "bold",
            color:"black"
        }

        return(

            <div className='masthead segment bg3'>
                <div className="ui container">
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

                        <a href="/search.html" className="ui huge inverted download button">
                            Test it!
                        </a>
                        <a href="/introduction/new.html" className="ui huge inverted basic button">Architecture</a>
                    </div>             
                </div>
             </div> 
        );
    }
}

export default MenuBanner;