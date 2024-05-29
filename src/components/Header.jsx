// /src/components/Header.jsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Drawer, List, ListItem, useMediaQuery } from '@mui/material';

import nileLogoLg from '../assets/images/nilelogolarge.svg';

import { styled, useTheme } from '@mui/material/styles';


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));


    const drawerList = (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <h2 className='pl3 pr3'>Civil Engineering PhD</h2>
            <List>
                <ListItem component={Link} to="/#about">
                    <p className='black'>About</p>
                </ListItem>
                <ListItem component={Link} to="/#projects">
                    <p className='black'>Researches</p>
                </ListItem>
                <ListItem component={Link} to="/#contact">
                    <p className='black'>Contact</p>
                </ListItem>
                <ListItem component={Link} to="/#students">
                    <p className='black'>Candidates</p>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <AppBar position="sticky">
                <Toolbar className="pa3 bg-dark-blue inline-flex justify-between items-center w-100 center">
                    <Link to="/" className="link" style={{ outline: 'none' }}>
                        <img src={nileLogoLg} className="w-70" />
                    </Link>
                    {isSmallScreen ? (
                        <>
                            {/* <i ></i> */}
                            <i onClick={toggleDrawer(true)} className="material-icons">menu</i>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                <DrawerHeader>
                                    <i onClick={toggleDrawer(false)} className="material-icons fr">close</i>
                                </DrawerHeader>
                                {drawerList}
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <h2 className='dn-m'>Civil Engineering PhD</h2>
                            <div className="dn-s">
                                <Link style={{ outline: 'none' }} to="/#about" className="f4 white pa3 link pointer dim">About</Link>
                                <Link style={{ outline: 'none' }} to="/#projects" className="f4 white pa3 link pointer dim">Researches</Link>
                                <Link style={{ outline: 'none' }} to="/#contact" className="f4 white pa3 link pointer dim">Contact</Link>
                                <Link style={{ outline: 'none' }} to="/#students" className="f4 white pa3 link pointer dim">Candidates</Link>
                            </div>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
