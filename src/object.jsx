var React = require('react');

var ObjectTwoWayMixin = {
    linkObject: function (object, objectKey) {
        return {
            value: object[objectKey],
            onChange: function (event) {
                if (event.target.value !== object[objectKey]) {
                    object[objectKey] = event.target.value;
                    this.forceUpdate();
                }
            }.bind(this)
        }
    }
};

module.exports = React.createClass({
    propTypes: {
        model: React.PropTypes.object.isRequired
    },

    mixins: [ObjectTwoWayMixin],

    render: function () {
        return <div>
            <h2>Hello From Object, {this.props.model.name}</h2>
            <input type="text" {...this.linkObject(this.props.model, 'name')} />
        </div>
    }
});
