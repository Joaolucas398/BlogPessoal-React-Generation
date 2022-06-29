import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import './navbar.css';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box display="flex" >
                        
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Como funciona?
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Dúvidas Frequentes
                            </Typography>
                        </Box>


                        
                    </Box>
                    <Box style={{ cursor: "pointer" }} >
                       <img id='logo' src='https://nfa-blob-storage.global.ssl.fastly.net/nfa-static/prod/pt_br_logo.svg'  />
                    </Box>
                    <Box  >
                        <Button  variant="contained" >
                            Entrar
                        </Button>
                        </Box>
                    <Box  >
                        <Button variant="contained" disableElevation>
                            Cadastre-se
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;