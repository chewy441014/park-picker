import React from 'react';
import ResultsCard from '../resultscard';

function SearchResults(props) {
    return (
        <div id="results-column">
            <ResultsCard data={props.data} />
        </div>
    );
}

export default SearchResults;