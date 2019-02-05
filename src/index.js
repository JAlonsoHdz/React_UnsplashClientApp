import React from 'react'; 
import ReactDOM from 'react-dom'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';

import unsplash from './api/unsplash';


import Search from './components/search'; 
import MenuBanner from './components/menuBanner';
import Menu from './components/menu';
import Images from './components/imageList';
import Architecture from './components/architecture';
import YouTubeApp from './components/YouTubeApp';


/* const App = () => {
    return (<p>Hello this is just a test</p>);
} */

class App extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            term:"Hello",
            images: []
        }; 


    }

    onSearchSubmit = async (term) => {
        const res = await unsplash.get('search/photos',{
            params: {query: term},
            
        });
        console.log(this);
        this.setState({images: res.data.results}); 
  
    }


    render() {          
        return (
            <Router>
                <div id="example" className="index">                              
                <Route path="/" component={Menu} />
                <Route exact path="/" component={MenuBanner} />
                <div className="ui container">
                    <Route exact path="/search" render={(props) => <Search imageAmount={this.state.images.length} onSubmit={this.onSearchSubmit}/>} />
                    <Route exact path="/search" render={(props) => <Images listImg = {this.state.images}/>} />
                </div>
                <Route exact path="/architecture" component={Architecture}  />
                <Route exact path="/YouTubeApp" component={YouTubeApp}  />
                
               {/*  <Menu />                        
                        <MenuBanner />
                        <Search imageAmount={this.state.images.length} onSubmit={this.onSearchSubmit}/>  
                        <Images listImg = {this.state.images}/>   */}                                                         
                </div>                   
            </Router>
        );
    }
    
}

ReactDOM.render (<App />, document.getElementById('root'));

export default App; 