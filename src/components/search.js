import React from 'react'; 

class Search extends React.Component {    
    state = {term: ""};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
              
    }

    render() {                       
        return (                
                <div className="content">
                    
                    <div className="ui segment">
                        
                        <form onSubmit={this.onFormSubmit} className="ui form">
                            <div className="field">
                                <label>Type the keyword image below and hit return:</label>
                                <input 
                                    placeholder="Search image keyword(s)...."
                                    type="text" 
                                    value={this.state.term}
                                    onChange={e => this.setState({term: e.target.value})} 
                                /><br/>
                                Found: {this.props.imageAmount} images
                            </div>
                        </form>
                    </div>
                </div>
        );
    }    
}

export default Search; 