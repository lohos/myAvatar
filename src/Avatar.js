import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Avatar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card>
                <Image src={this.props.user.picture.large} />
                <Card.Content>
                <Card.Header>{`${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`}</Card.Header>
                <Card.Meta>
                    <span className='date'>{this.props.user.registered.date}</span>
                </Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}
export default Avatar;