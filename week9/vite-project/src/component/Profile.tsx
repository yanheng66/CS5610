import React from 'react'

export default function Profile() {
    const { user } = useAuth0();
    console.log(user);
    return (
        <div>Profile</div>
    )
}
