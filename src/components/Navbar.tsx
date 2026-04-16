import { AppBar, Toolbar } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" sx={navbarStyles.appbar}>
            <Toolbar>
                Recipes
            </Toolbar>
        </AppBar>
    )
}


const navbarStyles = {
    appbar: {
        margin: 0,
        borderRadius: 0,
        padding: 0,
        backgroundColor: "#798262"
    },
}