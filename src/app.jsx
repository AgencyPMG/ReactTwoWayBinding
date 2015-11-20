var React = require('react');
var ReactDOM = require('react-dom');
var Model = require('backbone').Model;
var SimpleHello = require('./simple');
var StateHello = require('./state');
var ObjectHello = require('./object');
var SimpleObjectHello = require('./simpleobject');
var BackboneHello = require('./backbone');

ReactDOM.render(<SimpleHello initialName="PMG" />, document.getElementById('simple-container'));


ReactDOM.render(<StateHello initialName="PMG" />, document.getElementById('state-container'));

var model1 = {name: 'PMG'}
ReactDOM.render(<SimpleObjectHello model={model1} />, document.getElementById('simpleobject-container'));

var model2 = {name: 'PMG'};
ReactDOM.render(<ObjectHello model={model2} />, document.getElementById('object-container'));

var model3 = new Model({name: 'PMG'});
ReactDOM.render(<BackboneHello model={model3} />, document.getElementById('backbone-container'));
