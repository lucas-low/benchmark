import React from "react";
import stashLogo from '../images/logo.png'
import {
    Box,
    AppBar,
    Toolbar,
    Button,
    Typography,
    Grid,
    Tabs,
    Tab,

} from '@mui/material';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};


const Navbar = () => {
    return (
        <>
            <AppBar sx={{ bgcolor: "#072340" }} color="primary" elevation={0} position="sticky"  >
                <Toolbar>
                    <Box sx={{ flex: 1 }} />
                    <img
                        src={stashLogo}
                        alt="logo"
                        className="nav-icon"
                    />
                    <h3 className="nav--logo_text">StashAway</h3>
                    <Grid container spacing={0} alignItems="center">
                        <Box sx={{ flex: 1 }} />
                        <Link
                            variant="h6"
                            underline="none"
                            color="inherit"
                            href="/"
                            sx={rightLink}
                        >
                            {'Home'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/"
                            sx={rightLink}
                        >
                            {'Manage deposits'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/"
                            sx={rightLink}
                        >
                            {'Refer a friend'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/"
                            sx={rightLink}
                        >
                            {'Support'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/"
                            sx={rightLink}
                        >
                            {'Lucas'}
                        </Link>
                        <KeyboardArrowDownSharpIcon sx={{ color: "white", fontSize: "20px" }} />
                    </Grid>
                </Toolbar>
            </AppBar>

            <AppBar //new row
                component="div"
                color="primary"
                position="sticky"
                elevation={0}
                sx={{ zIndex: 0, bgcolor: "#072340" }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Link
                                variant="h6"
                                underline="none"
                                href="/"
                                sx={{ rightLink, color: "rgb(63, 182, 178)" }}>
                                <Typography variant="h6" component="h1">
                                    <ArrowBackIcon sx={{ color: "rgb(63, 182, 178)", fontSize: "20px" }} />
                                    Overview
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}></Box>

            <Toolbar sx={{ bgcolor: "#072340" }}>

                <Typography variant="h7" component="h1" sx={{ color: "white", fontSize: "40px" }}>
                    General investing
                </Typography>
            </Toolbar>
            <AppBar sx={{ bgcolor: "#072340" }} color="primary" elevation={0} position="sticky">
                <Toolbar >
                    <Grid container justifyContent="flex-start">
                        <Tabs value={0} textColor="inherit">
                            <Tab label="Overview" />
                            <Tab label="Assets" />
                            <Tab label="Projection" />
                            <Tab label="Benchmark" />
                        </Tabs>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Link
                            variant="h6"
                            underline="none"
                            href="/"
                            sx={rightLink}
                        >
                            {'More options'}<KeyboardArrowDownSharpIcon sx={{ color: "white", fontSize: "20px" }} />
                        </Link>

                    </Grid>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar