import React from 'react'; 
import ReactDOM from 'react-dom'; 
import unsplash from './api/unsplash';
import Search from './components/search'; 
import MenuBanner from './components/menuBanner';
import Menu from './components/menu';
import Images from './components/imageList';

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
            
            
            <div id="example" className="index">          
                    <Menu />
                    <MenuBanner />
                    <Search imageAmount={this.state.images.length} onSubmit={this.onSearchSubmit}/>  
                    <Images listImg = {this.state.images}/>
                                       
            </div>                   
            
        );
    }
    
}

ReactDOM.render (<App />, document.getElementById('root'));

export default App; 