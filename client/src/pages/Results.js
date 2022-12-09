import React from 'react';
// import components
import SearchResults from '../components/searchresults';

// utils/queries needs to be modified
const Results = (props) => {
    return (
        <main>
            <SearchResults data={props.data} />
        </main>
    )
}

export default Results;