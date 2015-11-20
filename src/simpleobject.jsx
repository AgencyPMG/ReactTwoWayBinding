var React = require('react');

module.exports = React.createClass({
    propTypes: {
        model: React.PropTypes.object.isRequired
    },

    onChange: function (event) {
        if (this.props.model.name !== event.target.value) {
            this.props.model.name = event.target.value;
            this.forceUpdate();
        }
    },

    render: function () {
        return <div>
            <h2>Hello From Simple Object, {this.props.model.name}</h2>
            <input type="text" value={this.props.model.name} onChange={this.onChange} />
        </div>
    }
});
