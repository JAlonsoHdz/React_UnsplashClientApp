import React from 'react';
import VideoList from './VideoList';
import './VideoDetails.css';

const VideoDetails = ({video}) => {
    return (
   
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    
    
    );
}

export default VideoDetails;