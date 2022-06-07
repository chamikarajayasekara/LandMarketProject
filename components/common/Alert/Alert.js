import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { useContext } from "react";
import AlertContext from "../../../context/alert";


/**
 * Default Alert Component Based on Material Snackbar
 * and MuiAlert.
 */
export default function Alert(){
    const {alertContext, setAlertContext} = useContext(AlertContext);
    const {show,message,severity} = alertContext;
    const handleAlertClose = () => {
        setAlertContext({
            ...alertContext,
            show: false
        })
    };

    return (
        <Snackbar
            open={show}
            autoHideDuration={2500}
            anchorOrigin={{vertical:'top', horizontal:'right'}}
            onClose={handleAlertClose}
        >
            <MuiAlert elevation={6} variant="filled" severity={severity||'success'}>
                {message}
            </MuiAlert>
        </Snackbar>
    )
}
