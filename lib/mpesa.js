
import toast from 'react-hot-toast';

export const handleMpesa = (amount=0, shortCode=174379, phoneNumber=254708374149) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer eYLKKCSauKqGBiv56JmzEY457rNn");
    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
    mode: 'cors',
    method: 'POST',
    headers,
    body: JSON.stringify({
        "BusinessShortCode": shortCode,
        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNzIzMTYxNjEz",
        "Timestamp": "20220723161613",
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": 254708374149,
        "PartyB": 174379,
        "PhoneNumber": phoneNumber,
        "CallBackURL": "https://ecommerce-seven-jet.vercel.app/cart",
        "AccountReference": "CompanyXLTD",
        "TransactionDesc": "Payment of X" 
    })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result)
        toast.success(`Successfully paid ${amount}, check your text messages for MPESA payment details`)
    })
    .catch(error => console.log(`MPESA error: ${error}`));
}