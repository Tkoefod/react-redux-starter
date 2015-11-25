'use strict'

require("./style.css");
var React = require('react');
var ReactDOM = require('react-dom');
var MyTest = require('./components/MyTest'); //sample component

ReactDOM.render(<MyTest />, document.getElementById('reactcontent'));
