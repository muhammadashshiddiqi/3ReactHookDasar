import React, { useEffect, useState } from 'react'

function LifeCycleFunc() {
    const [name, setName] = useState("");
    const [isUpdate, setUpdate] = useState(false);

    // component did mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                setName(json.name);
            });
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            setUpdate(true);
        });
    };

    // component did update
    useEffect(() => {
        if(isUpdate){
            alert('nama sukses diupdate');
            setUpdate(false);
        }
    }, [isUpdate]);

    //component will unmount
    useEffect(() => {
        return () => {
            console.log("component dicopot");
        };
    }, []);

    return (
        <div>
            <h4>Name : {name}</h4>
            <hr />
            <h5>Update Nama</h5>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <input type="text" placeholder="update nama" name="name" onChange={(evt) => setName(evt.target.value) } />
                <button type='submit'> Save</button>
            </form>
        </div>
    )
}

export default LifeCycleFunc
