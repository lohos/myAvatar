import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import Avatar from './Avatar';
class AvatarList extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount(){
    //     const apiUrl = `https://randomuser.me/api/?results=${this.props.size}&nat=au`
    //     axios.get(apiUrl)
    //     .then(response => {
    //         this.setState({users: response.data.results});
    //     })
    // }
    // componentWillReceiveProps(nextProps) {
    //     const { size } = nextProps;
    //     const apiUrl = `https://randomuser.me/api/?results=${size}&nat=au`
    //     axios.get(apiUrl)
    //     .then(response => {
    //         this.setState({users: response.data.results});
    //     })
    // }
    renderAvatarList(){
        return this.props.users.map(user => <Avatar key={user.id.value} user={user}/>)
    }
    render(){
        return(
            <div className='avatarContainer'>
                <Card.Group itemsPerRown={4}>
                    {this.renderAvatarList()}
                </Card.Group>
            </div>
        )
    }
}
export default AvatarList;