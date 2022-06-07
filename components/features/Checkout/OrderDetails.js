import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const OrderDetails = ({fname,phone,setPhone,email,setEmail,setFname,setLname,lname}) => {
    const [save,setSave] = useState(false);
    function handleSavePersonalDetails() {
        //function called
        setSave(true)
    }

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-10/12">
                    <h3 className="checkout-text-1"><b>Personal Details</b></h3>
                </div>
                <div className="w-2/12">
                    Edit
                </div>
            </div>

            <div>
                {
                    fname && lname && email && phone && save === true ?
                        <Card className="checkout-box">
                            <CardContent>
                                <p className="checkoutbox-text">{fname} &nbsp;&nbsp;{lname}</p>
                                <p className="checkoutbox-text">{email}</p>
                                <p className="checkoutbox-text">{phone}</p>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>

                        :
                        <form  className="flex flex-wrap mt-8 mb-6">
                            <TextField id="outlined-basic" label="First Name" variant="outlined"  className="md:w-5/12 w-full textField"  onChange={e=>setFname(e.target.value)} required={true} />
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setLname(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setEmail(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="Mobile" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setPhone(e.target.value)} required={true}/>
                            <button type="submit" className="md:w-5/12 w-full checkoutPage-save-btn" onClick={e => handleSavePersonalDetails()}>
                                Save
                            </button>
                        </form>
                }

            </div>
        </div>
    );
};

export default OrderDetails;