import React from 'react';
import { useQuery } from '@apollo/client';

// import components
import SearchCard from '../components/searchcard';

import { QUERY_THOUGHTS } from '../utils/queries';
// utils/queries needs to be modified

const Home = () => {
    const { loading, data } = useQuery(QUERY_THOUGHTS);

    return (
        <main>
            <SearchCard />
        </main>
    )
}

export default Home;