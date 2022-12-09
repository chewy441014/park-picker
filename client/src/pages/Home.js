import React from 'react';

// import components
import SearchCard from '../components/searchcard';

const Home = (props) => {
    return (
        <main>
            <SearchCard data={props}/>
        </main>
    )
}

export default Home;