
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
        Password: "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNzIzMTYxNjEz",
        Timestamp: "20220723161613",
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
        console.warn(`MPESA error: ${error} using headers ${JSON.stringify(headers)}`)
      })
}