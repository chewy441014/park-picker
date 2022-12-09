import React from 'react';
import ResultsCard from '../resultscard';

function SearchResults(props) {
    return (
        <div id="results-column">
            {/* Iterate over the results and show them in a list
              * Using something similar to 
              * const numbers = [1, 2, 3, 4, 5];
              * const listItems = numbers.map((number) =>
              *   <li>{number}</li>
              * ); 
              * display ten search results 
              * temporarily show ten by default
              */}
            <ResultsCard data={props.data} />

        </div>
    );
}

export default SearchResults;