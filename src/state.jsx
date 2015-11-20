var React = require('react');

var StateTwoWayMixin = {
    linkState: function (key) {
        return {
            value: this.state[key],
            onChange: function (event) {
                if (event.target.value === this.state[key]) {
                    return;
                }
                var newState = {};
                newState[key] = event.target.value;
                this.setState(newState);
            }.bind(this)
        }
    }
};

module.exports = React.createClass({
    propTypes: {
        initialName: React.PropTypes.string.isRequired
    },

    mixins: [StateTwoWayMixin],

    getInitialState: function () {
        return {name: this.props.initialName};
    },

    render: function () {
        return <div>
            <h2>Hello From State, {this.state.name}</h2>
            <input type="text" {...this.linkState('name')} />
        </div>
    }
});
