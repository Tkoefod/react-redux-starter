'use strict'
var React = require('react');

module.exports = React.createClass({
  displayName: 'MyTest',
  onMyClick: function(){
    alert("i was clicked");
  },
  render: function(){
    return (<div> <h1 onClick={this.onMyClick}>Hays Worlds!!!! </h1> <p>this is a react component </p></div>);
  }
});
