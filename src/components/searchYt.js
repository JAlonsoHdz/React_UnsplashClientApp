import React from 'react';

class SearchYT extends React.Component {

    state = {term: ''};

    
    onVideoSearch = event => {
        event.preventDefault();

        this.props.onVideoSubmit(this.state.term);
              
    }

    render() {
        return (
                              
                    <div className="ui segment">                        
                        <form onSubmit={this.onVideoSearch} className="ui form">
                            <div className="field">
                                <label>Type the keyword image below and hit return:</label>
                                <input 
                                    placeholder="Search image keyword(s)...."
                                    type="text"
                                    value = {this.state.term}
                                    onChange = {e => this.setState({term: e.target.value})} 
                                   
                                /><br/>
                                Found: {this.props.videoCount} videos
                            </div>
                        </form>
                    </div>
            
            );
    }
}

export default SearchYT;