import React from 'react';
import VideoDetails from './VideoDetails';

class VideoList extends React.Component {
    render() {

        const renderedList = this.props.videoArray.map((video) => {
            return <VideoDetails video={video}/>;
        });

        return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
        );
    }

}

export default VideoList;