import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo
            isOwner={props.isOwner} profile={props.profile}
            aboutMe={props.status} status={props.status}
            updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;