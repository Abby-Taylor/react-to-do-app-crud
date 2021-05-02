import React from 'react';
import Form from './Form';
// import ListItem from './ListItem';
import { itemsApi } from '../rest/TodoApi'

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addNewItem = this.addNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
    }
    componentDidMount() {
        this.fetchItems();
    }
    addNewItem = async (item) => {
        await itemsApi.create(item);
        this.fetchItems();
    }
    deleteItem = async (id) => {
        await itemsApi.delete(id);
        this.fetchItems();
    }
    fetchItems = async () => {
        const responses = await itemsApi.get();
        this.setState({ items: responses });
    }
    editItem = async (updatedItem) => {
        await itemsApi.put(updatedItem);
        this.fetchItems();
    }
    render() {
        return (
            <div className="container card" style={{ padding: '0px' }}>
                <div className="card-header text-center">
                    To do List
                    <br />
                    <img src="http://placekitten.com/g/400/200" alt="KITTY!!!!"></img>
                </div>
                <div className="card-body todo-list">
                    {this.state.items.map((item) => (
                        <ul className="list-group row">
                            <li key={item._id} className="list-group-item list-group-flush d-flex justify-content-between">
                                Item: {item.item}
                                <div className="btn-group" role="group">
                                    {/* <button className="btn btn-warning" onClick={this.editItem}>Edit</button> */}
                                    <button className="btn btn-danger" onClick={() => this.deleteItem(item._id)}>Delete</button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="card-footer">
                    <Form addNewItem={this.addNewItem} />
                </div>
            </div>
        );
    }
}
