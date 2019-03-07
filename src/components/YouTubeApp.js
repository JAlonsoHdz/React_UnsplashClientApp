import React from 'react';
import SearchYT from './searchYt';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import WatchVideo from './WatchVideo';



class YouTubeApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term:"Hello",
            videos: [],
            selectedVideo: null
            
        }; 
    }

    componentDidMount(){
        this.onSearchSubmit('Spring Framework');
    }

    onSearchSubmit = async (term) => {
        const res = await youtube.get('search/',{
            params: {q: term},
            
        });
        console.log(res.data.items);
         this.setState({
                videos: res.data.items,
                selectedVideo: res.data.items[0]
         }); 
  
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video}
            );
    };

    render() {
        return (
            <div className="ui container">                
                <SearchYT onVideoSubmit={this.onSearchSubmit} videoCount={this.state.videos.length}/>   
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <WatchVideo video={this.state.selectedVideo}/> 
                        </div>  
                        <div className="five wide column">
                            <VideoList videoArray={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>    
                    </div>
                </div>
            </div>
        );
    }
}

export default YouTubeApp;