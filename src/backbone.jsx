var React = require('react');
require('react.backbone');
var Model = require('backbone').Model;

var BackboneTwoWayMixin = {
    linkModel: function (model, key) {
        return {
            value: model.get(key),
            onChange: function (event) {
                if (model.get(key) !== event.target.value) {
                    model.set(key, event.target.value);
                }
            }.bind(this)
        };
    }
};

module.exports = React.createClass({
    propTypes: {
        model: React.PropTypes.instanceOf(Model).isRequired
    },

    mixins: [
        BackboneTwoWayMixin,
        React.BackboneMixin('model')
    ],

    render: function () {
        return <div>
            <h2>Hello From Backbone, {this.props.model.get('name')}</h2>
            <input type="text" {...this.linkModel(this.props.model, 'name')} />
        </div>
    }
});
