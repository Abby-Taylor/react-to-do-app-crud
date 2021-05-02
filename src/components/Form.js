import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (event) => {
        this.setState({ item: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addNewItem({ item: this.state.item });
        this.setState({ item: '' });
    }
    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="New Item" value={this.state.item} onChange={this.onChange}></input>
                    </div>
                    <button className="btn btn-primary col-sm-2" onClick={this.onSubmit}>Add</button>
                </div>
            </form>
        )
    }
}