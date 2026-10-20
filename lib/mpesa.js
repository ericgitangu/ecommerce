// TECH DEBT: this STK push runs in the browser, so every NEXT_PUBLIC_MPESA_*
// value is shipped to clients. Acceptable only because the M-Pesa button is
// disabled in Cart.jsx. Before re-enabling: move the call to an API route,
// derive Password = base64(shortcode + passkey + timestamp) server-side per
// request, and read credentials from server-only env vars.

import toast from 'react-hot-toast';
import axios from 'axios'

export const handleMpesa = async (amount=0, shortCode=174379, phoneNumber=254708374149) => {
    
    const headers = {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MPESA_AUTHORIZATION_TOKEN}`,
            'Access-Control-Allow-Origin': '*'
    }
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    
    const data = {
        BusinessShortCode: shortCode,
        Password: process.env.NEXT_PUBLIC_MPESA_PASSWORD,
        Timestamp: process.env.NEXT_PUBLIC_MPESA_TIMESTAMP,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: 254708374149,
        PartyB: 174379,
        PhoneNumber: phoneNumber,
        CallBackURL: "https://ecommerce-seven-jet.vercel.app/cart",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X" 
    }

    await axios.post(url, data, {headers})
      .then((response) => {
        toast.success(`Successfully paid ${amount} with MPESA, check your MPESA text message for details, ${JSON.stringify(response)}`)
      })
      .catch((error) => {
        console.warn(`MPESA error: ${error}`)
      })
}