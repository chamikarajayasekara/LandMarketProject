import React, {useEffect, useState} from 'react';
import Cleave from "cleave.js/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {returnChunksArray} from "../../../helpers/chunkString";

const PaymentDetails = ({name, setName, creditCardNo, setCreditCardExpiryDate, creditCardExpiryDate, setCreditCardNo}) => {
    var creditCardType = require("credit-card-type");
    const [save,setSave] = useState(false);
    let maskedNumber;
    let cardType;
    const handleSavePaymentDetails = () =>{
        setSave(true)
    }

    if (creditCardNo.length > 15){
        let result = returnChunksArray(creditCardNo,4)
        if (creditCardNo.length === 16 ){
           maskedNumber = result[0]+ " "+ '****' + " " + '****' + " " +result[3];
           let cardTypeSetter = creditCardType(result[0]);
           cardType = cardTypeSetter[0].type
        }
    }

    useEffect(()=>{
        console.log(maskedNumber)
        console.log(cardType)
    },[maskedNumber])
    return (
        <div>
            <h3 className="checkout-text-1"><b>Card Details</b></h3>
            <div>
                {
                    name && creditCardNo && creditCardExpiryDate && save === true?
                        <Card className="checkout-box">
                            <CardContent>
                                {
                                    maskedNumber !== undefined && cardType !== undefined ?  <p className="checkoutbox-text">
                                        {cardType}&nbsp;&nbsp;{maskedNumber}

                                    </p> : null
                                }
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button size="small">Learn More</Button>*/}
                            {/*</CardActions>*/}
                        </Card>
                        :
                        <form action="" className="flex flex-wrap mt-8 mb-6">
                            <input type="text" className="textField-2 md:w-5/12 w-full" placeholder="Card Holder Name" required="true"
                                   onChange={e => setName(e.target.value)}/>
                            <Cleave placeholder="XXXX - XXXX - XXXX - XXXX" name="creditCardNo"
                                    options={{blocks: [4, 4, 4, 4], numericOnly: true, minLength: 13}} className="textField-2 md:w-5/12 w-full"
                                    onChange={e => setCreditCardNo(e.target.rawValue)} required={true}/>

                            <Cleave placeholder="MM/YY" className="textField-2 md:w-5/12 w-full"
                                    options={{blocks: [2, 2], delimiter: '/', numericOnly: true}}
                                    onChange={e => setCreditCardExpiryDate(e.target.rawValue)} required={true}/>

                            <input type="text" className="textField-2 md:w-5/12 w-full" placeholder="CVC" maxLength="4" required="true"/>
                            <button type="submit" className="md:w-5/12 w-full checkoutPage-save-btn" onClick={e => handleSavePaymentDetails()}>
                                Save
                            </button>
                        </form>
                }

            </div>
        </div>
    );
};

export default PaymentDetails;