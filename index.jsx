'use strict'

require("./style.css");
var React = require('react');
var ReactDOM = require('react-dom');
var MyTest = require('./components/MyTest'); //sample component
document.write("<div id='reactcontent'></div>");
ReactDOM.render(<MyTest />, document.getElementById('reactcontent'));
