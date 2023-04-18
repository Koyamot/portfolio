import React from 'react'

const Avatar = ({avatar}) => {
    const name = avatar.Name
    const pic = avatar.Image.url
    return (
        <div className="avatar-container">
            <img className="avatar" src={pic} alt="profile thumbnail"/>
          <p>by {name}</p>  
        </div>
    )
}

export default Avatar
