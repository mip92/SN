import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    let activateMode = () => {
        setEditMode(true);
    }
    let deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activateMode}> {props.status || '---'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       onBlur={deactivateMode}
                       autoFocus={true}
                       value={status}
                />
            </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;