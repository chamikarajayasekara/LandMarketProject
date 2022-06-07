import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ShippingDetails = ({postal,setPostal,setAddr_line1,addr_line1,addr_line2,city,country,setCountry,setAddr_line2,setCity,province,setProvince}) => {
    const [save,setSave] = useState(false);

    const handleSaveShippingDetails = () =>{
        setSave(true)
    }
    return (
        <div>
            <h3 className="checkout-text-1"><b>Shipping Details</b></h3>
            <div>
                {
                    addr_line2 && addr_line2 && city && province && postal && country && save === true ?
                        <Card className="checkout-box">
                            <CardContent>
                                <p className="checkoutbox-text">{addr_line1} &nbsp;,{addr_line2}</p>
                                <p className="checkoutbox-text">{city}</p>
                                <p className="checkoutbox-text">{province}</p>
                                <p className="checkoutbox-text">{postal}</p>
                                <p className="checkoutbox-text">{country}</p>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                        :
                        <form  className="flex flex-wrap mt-8 mb-6">
                            <TextField id="outlined-basic" label="Address Line 1" variant="outlined"  className="md:w-5/12 w-full textField" onChange={e=>setAddr_line1(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="Address Line 2" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setAddr_line2(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="City" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setCity(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="Province/State" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setProvince(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="Postal/Zip Code" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setPostal(e.target.value)} required={true}/>
                            <TextField id="outlined-basic" label="Country" variant="outlined" className="md:w-5/12 w-full textField" onChange={e=>setCountry(e.target.value)} required={true}/>
                            <button type="submit" className="md:w-5/12 w-full checkoutPage-save-btn" onClick={e => handleSaveShippingDetails()}>
                                Save
                            </button>
                        </form>
                }
            </div>
        </div>
    );
};

export default ShippingDetails;