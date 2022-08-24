import React, {useEffect, useState} from 'react';
import "./App.css";
import UserForm from "./components/UserForm";

const url = "https://rest-api-without-db.herokuapp.com/users"


const App = () => {
    
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    const getAllUsers = () => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("could not fetch")
                }
                return res.json()
            })
            .then((data) => {
                console.log(data.users)
                setUsers(data.users);
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
        
    }
    
    
    useEffect(() => {
        getAllUsers();
    }, [])
    
    const handleDelete = (id) => {
        fetch(url + `/${id}`, {method: 'DELETE'})
            .then((res) => {
                if (!res.ok) {
                    throw Error("could not delete");
                }
                getAllUsers();
                
            })
            .catch((err) => {
                setError(err.message);
            })
    }
    
    const addUser = (user) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            
        })
            .then((res) => {
                if (res.status === 201) {
                    getAllUsers();
                } else {
                    throw new Error("could not create new user");
                }
            })
            .catch((err) => {
                setError(err)
            });
    }
    
    return (
        <div className="App">
            <h1>User Management App</h1>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            
            
            <UserForm btnText="Add User" handleSubmitData={addUser}/>
            
            <section>
                {users && users.map((user) => {
                    const {id, username, email} = user;
                    return (
                        <article key={id} className="card">
                            <p>{username}</p>
                            <p>{email}</p>
                            <button className="btn">Add</button>
                            <button className="btn" onClick={() => {
                                handleDelete(id)
                            }}>Delete
                            </button>
                        </article>
                    )
                })}
            
            </section>
        </div>
    );
};

export default App;