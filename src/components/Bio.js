import React from 'react';

const Bio = () => {
    return (
    <div className="ui vertical stripe segment">
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="eight wide column">
          <h3 className="ui header">Who's this guy?</h3>
          <p>I'm a mexican Software Engineer currently based in Houston, Texas. I work for HPE company as a Solution Architect role.
I'm passionate about single page application built with react.js with node.js and Java spring boot microservices architecture. Always eager to learn new technologies and frameworks to ease the software development process. Among my personal hobbies I love soccer, video games, playing guitar and workout.</p>
          <h3 className="ui header">Accomplishments</h3>
          <p>Through out my career I've delivered enterprise portal migrations and expanding capabilities to achieve and exceed customer/partner satisfaction. Improve channel user experience and lead local and remote teams.</p>
        </div>
        <div className="six wide right floated column">
          <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/1914574_145728029057_5745636_n.jpg?_nc_cat=106&_nc_ht=scontent-dfw5-2.xx&oh=a6c39734158bed6129842fa9aa5ad348&oe=5CE4EC7F" className="ui large bordered rounded image"/>
        </div>
      </div>
      <div className="row">
        <div className="center aligned column">
          <a className="ui huge button" href="https://www.linkedin.com/in/alonsohernandez1/" target="_blank">Linkedin</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Bio;