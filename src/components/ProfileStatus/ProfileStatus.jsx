import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })

    }

    deActivateEditMode() {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
        let p = this.props;
        let s = this.state;
        console.log('1')
    }


    render() {
        return (
            <div>
                {this.state.editMode == true ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => {
                            this.deActivateEditMode()
                        }} value={this.state.status}></input>
                    </div>
                    : <div>
                        <span onClick={() => {
                            this.activateEditMode()
                        }}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;