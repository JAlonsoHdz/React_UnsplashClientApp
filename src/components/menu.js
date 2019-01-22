import React from 'react';

class Menu extends React.Component {

    render(){
        

        return(
            <div className="ui menu">
                <div className="header item">Unsplash API client</div>
                <a className="active item" href="https://github.com/JAlonsoHdz/React_UnsplashClientApp" target="_blank">GitHub</a>
                <a className="item">Contact Me</a>
                <div className="ui dropdown item">
                    Other
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <div className="item">Java and Struts</div>
                        <div className="item">LifeRay DXP Work</div>
                        <div className="item">Spring boot webapp</div>
                        <div className="divider"></div>
                        <div className="item">Wordpress</div>
                       
                    </div>
                </div>  
                <div className="right menu">
                    <div className="item">
                        <div className="ui action left icon input">
                            <i className="search icon"></i>
                            <input type="text" placeholder="Search"></input>    
                            <button className="ui button">Submit</button>
                        </div>
                    </div>
                    <a className="item">Link</a>
                </div>
            </div>
      );
    }
}

export default Menu;