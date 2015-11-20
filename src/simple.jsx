var React = require('react');

module.exports = React.createClass({
    propTypes: {
        initialName: React.PropTypes.string.isRequired
    },

    getInitialState: function () {
        return {name: this.props.initialName};
    },

    onChange: function (event) {
        if (this.state.name !== event.target.value) {
            this.setState({
                name: event.target.value
            });
        }
    },

    render: function () {
        return <div>
            <h2>Hello From Simple, {this.state.name}</h2>
            <input type="text" value={this.state.name} onChange={this.onChange} />
        </div>
    }
});
