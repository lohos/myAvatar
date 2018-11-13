import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './AvatarSizeSelector.css';

class AvatarSizeSelector extends Component {
    render() {
        const avatarSizeOptions = [
            {key: 1, text:'50', value:50},
            {key: 2, text:'100', value:100},
            {key: 3, text:'150', value:150},
            {key: 4, text:'200', value:200}
        ]
        return (
            <div className='avatar-size-selector'>
                <Dropdown 
                    placeholder='Select Avatar Size' 
                    fluid selection 
                    options={avatarSizeOptions}
                    defaultValue={50} 
                    onChange={(event, data) => this.props.avatarSizeChange(data.value)}
                />
            </div>
        )
    }

}
export default AvatarSizeSelector;