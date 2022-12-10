import React, { useState, useEffect } from 'react';
import "./style.css"

function ResultCard(props) {
    console.log("props")
    console.log(props)
    const searchResults = props.data.result.data
    console.log(searchResults[0].url)
    // const [searchResults, setSearchResult] = useState([])

    return (
        <div >
            <button className='searchAgain'>
                Search Again
            </button>
            <h1>{props.title}</h1>
            <div className='searchContainer'>
                {
                    searchResults.map((data) =>
                        <div key={data.id}>
                            <div className='searchcard'>
                                <h2>
                                    {data.designation}
                                </h2>
                                <h5>
                                    {data.addresses[0].stateCode
                                    }
                                </h5>
                                <p>
                                    {data.description}
                                </p>
                                <p>
                                    {/* {data.description} */}
                                    distance: { }
                                </p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.Token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Flic-Gram</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <a href="" >
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                        </a>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.Token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Flic-Gram</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <a href="" >
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                        </a>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.Token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Flic-Gram</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <a href="" >
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                        </a>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.Token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Flic-Gram</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <a href="" >
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                        </a>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.Token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Flic-Gram</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <a href="" >
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                        </a>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.Token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Flic-Gram</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <a href="" >
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                        </a>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
export default ResultCard;