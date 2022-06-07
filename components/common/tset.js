// import React from "react";
// import {
//     makeStyles,
//     createMuiTheme,
//     ThemeProvider
// } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
//
// const theme = createMuiTheme({
//     overrides: {
//         MuiPaper: {
//             root: {
//                 color: "white"
//             }
//         }
//     }
// });
// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2)
//     },
//     root: {
//         backgroundColor: "red"
//     },
//     list: {
//         backgroundColor: "blue"
//     }
// }));
//
// export default function SimpleSelect() {
//     const classes = useStyles();
//     const [age, setAge] = React.useState("");
//
//     const handleChange = (event) => {
//         setAge(event.target.value);
//     };
//
//     return (
//         <div>
//             <ThemeProvider theme={theme}>
//                 <FormControl fullWidth className={classes.formControl}>
//                     <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={age}
//                         onChange={handleChange}
//                         MenuProps={{ classes: { list: classes.list } }}
//                     >
//                         <MenuItem
//                             classes={{
//                                 list: classes.list
//                             }}
//                             value={10}
//                         >
//                             Ten
//                         </MenuItem>
//                         <MenuItem value={20}>Twenty</MenuItem>
//                         <MenuItem value={30}>Thirty</MenuItem>
//                     </Select>
//                 </FormControl>
//
//             </ThemeProvider>
//         </div>
//     );
// }
