import React from 'react';
import { useQuery } from '@apollo/client';

// import components
import SearchResults from '../components/searchresults';

import { QUERY_THOUGHTS } from '../utils/queries';
// utils/queries needs to be modified

const Results = () => {
    const { loading, data } = useQuery(QUERY_THOUGHTS);

    return (
        <main>
            <SearchResults />
        </main>
    )
}

export default Results;