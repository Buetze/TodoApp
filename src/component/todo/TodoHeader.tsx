import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import { useHistory } from 'react-router-dom';

const TodoHeader: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Header
                    </Typography>
                    <Button variant="contained" color="secondary" className={classes.menuLink}>
                        <Link to="/todo" >Todo</Link>
                    </Button>
                    <Button
                        color="inherit" className={classes.menuLink}
                        onClick={() => { history.push('/about') }}
                    >
                        about
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuLink: {
        margin: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}))


export default TodoHeader