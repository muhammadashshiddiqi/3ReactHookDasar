import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             isUpdate: false
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => this.setState({
                name: json.name
            }));
    }

    componentDidUpdate(){
        const {isUpdate} = this.state;
        if(isUpdate){
            alert('Nama Berhasil Di Update');
            this.setState({
                isUpdate: false
            });
        }
    }

    componentWillUnmount(){
        console.log('component dicopot');
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: this.state.name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => 
                this.setState({
                    isUpdate: true
                })   
            );

    };

    render() {
        return (
            <div>
                <h5>Nama Gw : {this.state.name}</h5>
                <hr />
                <h5>Update Nama</h5>
                <form onSubmit={(evt) => this.handleSubmit(evt) }>
                    <input type="text" placeholder="update nama" name="name" onChange={(evt) => this.setState({ name: evt.target.value })} />
                    <button type='submit'> Save</button>
                </form>
            </div>
        )
    }
}
