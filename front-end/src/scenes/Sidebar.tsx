import styled from '@emotion/styled';
import { ViewHeadline } from '@mui/icons-material';
import { Box, CSSObject, Drawer, IconButton, List, Theme } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
})

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
}))

function Sidebar() {
    let [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={()=>{setOpen(true)}}>
                <ViewHeadline />
            </IconButton>
            <Drawer variant='temporary' anchor='left' open={open}>
                <Box sx={{width: 250}}>
                    <List></List>
                </Box> 
            </Drawer>
        </div>
        )
}

export default Sidebar;