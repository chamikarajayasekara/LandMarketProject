import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LandFilter from "../../features/Search/Filter/LandFilter";
import HomeFilters from "../../features/Search/Filter/HomeFilters";

export default function FilterModal({open, setOpen, handleClose, tabValue, getResults}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Filters"}
                </DialogTitle>
                <DialogContent>
                    {
                        tabValue === "lands" ?
                            <LandFilter/>
                            :
                            <HomeFilters/>
                    }
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={getResults} color="secondary">Search</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
