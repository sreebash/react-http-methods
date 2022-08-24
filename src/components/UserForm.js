import React, {useState} from 'react';

const UserForm = ({btnText, handleSubmitData}) => {
    const [user, setUser] = useState({
        username: "",
        email: ""
    });
    const {username, email} = user;
    const handleChange = (e) => {
        const selectedField = e.target.name;
        const selectedVal = e.target.value;
        setUser(prevState => {
            return {...prevState, [selectedField]: selectedVal}
        })
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitData(user)
        setUser({
            username: "",
            email: ""
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required value={username} onChange={handleChange}/>
            </div>
            <div className="field-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required value={email} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn">{btnText}</button>
        </form>
    );
};

UserForm.propTypes = {};

export default UserForm;