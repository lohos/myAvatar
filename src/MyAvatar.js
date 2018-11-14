import React, { Component } from 'react';
import AvatarList from './AvatarList';
import AvatarSizeSelector from './AvatarSizeSelector';
import axios from 'axios';
import './MyAvatar.css';
import MyPagination from './MyPagination';
const PAGE_SIZE = 10;
class MyAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            currentPage:1
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
    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }
    render(){
        const start = (this.state.currentPage-1)*PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const users = this.state.users.slice(start, end);
        const pages = Math.ceil(this.state.users.length/PAGE_SIZE);
        return(
            <div className='myavatar-container'>
                <h3>My Avatar</h3>
                <AvatarSizeSelector avatarSizeChange={this.avatarSizeChange}/>
                <MyPagination
                    pages={pages}
                    handlePageChange={this.handlePageChange}
                />
                <AvatarList users={users}/>
            </div>
        )
    }
}
export default MyAvatar