import React from 'react';
import SearchYT from './searchYt';
import youtube from '../api/youtube';
import VideoList from './VideoList';



class YouTubeApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term:"Hello",
            videos: []
            
        }; 
    }

    onSearchSubmit = async (term) => {
        const res = await youtube.get('search/',{
            params: {q: term},
            
        });
        console.log(res.data.items);
         this.setState({videos: res.data.items}); 
  
    }

    render() {
        return (
            <div className="ui container">                
                <SearchYT onVideoSubmit={this.onSearchSubmit} videoCount={this.state.videos.length}/>      
                <VideoList videoArray={this.state.videos} />      
            </div>
        );
    }
}

export default YouTubeApp;