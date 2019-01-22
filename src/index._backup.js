import React from 'react'; 
import ReactDOM from 'react-dom'; 
import unsplash from './api/unsplash';
import Comment from './components/anotherComment'; 
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
            <div className="ui comments">
            <h3 className="ui dividing header"></h3>
            <div className="comment">
                <a className="avatar"><img src="https://semantic-ui.com/images/avatar/small/elliot.jpg" /></a>
                <div className="content">
                    <a className="author">Alan Fu</a>
                    <div className="metadata">
                    <span className="date">Yesterday at 12:30AM</span>
                    </div>
                    <div className="text">
                    <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div className="actions">
                    <a className="reply">Reply</a>
                    <Comment author= "alonso hernandez" imageAmount={this.state.images.length} onSubmit={this.onSearchSubmit}/>  
                    <Images listImg = {this.state.images}/>
                    </div>
                </div>
            </div>    
            
            </div>                
        );
    }
    
}

ReactDOM.render (<App />, document.getElementById('root'));

export default App; 