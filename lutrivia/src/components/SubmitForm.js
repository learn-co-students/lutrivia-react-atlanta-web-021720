import React from 'react';

const SubmitForm = (props) => {
    return (  
        <div>
        <form onSubmit={props.handleFormSubmit}>
            <input type="input" name="user" placeholder="Enter Name" onChange={props.handleInputChange}/>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default SubmitForm