import React, { Component } from 'react';
import AvatarList from './AvatarList';
import AvatarSizeSelector from './AvatarSizeSelector';
import axios from 'axios';
import './MyAvatar.css';
class MyAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount() {
        this.fetchUsersData(50)
    }
    fetchUsersData(size) {
        const apiUrl = `https://randomuser.me/api/?results=${size}&nat=au`
        axios.get(apiUrl)
        .then(response => {
            this.setState({users: response.data.results});
        })
    }
    avatarSizeChange = (size) => {
        this.fetchUsersData(size)
    }
    render(){
        return(
            <div className='myavatar-container'>
                <h3>My Avatar</h3>
                <AvatarSizeSelector avatarSizeChange={this.avatarSizeChange}/>
                <AvatarList users={this.state.users}/>
            </div>
        )
    }
}
export default MyAvatar