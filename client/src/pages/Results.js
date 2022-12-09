import React from 'react';
import { useQuery } from '@apollo/client';

// import components
import SearchResults from '../components/searchresults';


// utils/queries needs to be modified

const Results = () => {


    return (
        <main>
            <SearchResults />
        </main>
    )
}

export default Results;