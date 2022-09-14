import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


const UserCard = styled.div`
border: 1px solid black;
margin:10px;
padding:10px;
display:flex;
justify-content:space-between;
`

class UserList extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount(){
        this.getAllUsers()
    } 

    getAllUsers = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            headers: {
              Authorization: "leandro-pereira-hooks",
            },
          };
          axios.get(url, headers).then((response) => {
            this.setState({usersList:response.data})
          })
          .catch((error) => {
            alert("Something went wrong!")
          })
    }

    DeleteUser = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers: {
              Authorization: "leandro-pereira-hooks",
            },
          };
          axios.delete(url,headers).then(response =>{
            alert("User deleted successfully!")
            this.getAllUsers()
          })
          .catch((error)=>{
            alert("Something went wrong!")
          })
    }

    render() {
        const newList = this.state.usersList.map((user) =>{
            return(
                <UserCard key={user.id}>
                    {user.name}
                    <button onClick={()=>this.DeleteUser(user.id)}>Delete</button>
                </UserCard>
            )
        })
        return(
            <div>
                <button onClick={this.props.goToRegistration}>Go to Registration</button>
                {newList}
            </div>
        )
    }
}
export default UserList;