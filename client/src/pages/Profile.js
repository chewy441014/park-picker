import React from 'react';
import { useQuery } from '@apollo/client';

// import components


import { QUERY_THOUGHTS } from '../utils/queries';
// utils/queries needs to be modified

const Profile = () => {
    const { loading, data } = useQuery(QUERY_THOUGHTS);

    return (
        <main>
            
        </main>
    )
}

export default Profile;