import React, {useState} from 'react';
import OrderDetails from "./OrderDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";

const OrderDetailsFormHome = () => {
    const[fname,setFname] = useState()
    const[lname,setLname] = useState()
    const[phone,setPhone] = useState()
    const[email,setEmail] = useState()

    const [addr_line1,setAddr_line1] = useState();
    const [addr_line2,setAddr_line2] = useState();
    const [city,setCity] = useState();
    const [province,setProvince] = useState();
    const [postal,setPostal] = useState();
    const [country,setCountry] = useState();

    const [creditCardNo, setCreditCardNo] = useState("");
    const [creditCardExpiryDate, setCreditCardExpiryDate] = useState("");
    const [name,setName] = useState();

    return (
        <div>
            <OrderDetails setFname={setFname} setLname={setLname} setPhone={setPhone} setEmail={setEmail} fname={fname} lname={lname} phone={phone} email={email}/>
            <ShippingDetails setAddr_line1={setAddr_line1} setAddr_line2={setAddr_line2} setCity={setCity} setProvince={setProvince} setPostal={setPostal} setCountry={setCountry}
                             addr_line1={addr_line1} addr_line2={addr_line2} city={city} province={province} postal={postal} country={country}
            />
            <PaymentDetails setCreditCardNo={setCreditCardNo} setCreditCardExpiryDate={setCreditCardExpiryDate} setName={setName}
                            creditCardNo={creditCardNo} creditCardExpiryDate={creditCardExpiryDate} name={name}
            />
        </div>
    );
}

export default OrderDetailsFormHome;