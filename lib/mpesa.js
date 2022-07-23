
import toast from 'react-hot-toast';
import axios from 'axios'

export const handleMpesa = (amount=0, shortCode=174379, phoneNumber=254708374149) => {
    
    const config = {
        headers: {
            'Content-Type': "application/json",
            'Authorization': "Bearer eYLKKCSauKqGBiv56JmzEY457rNn",
            "Origin": "https://ecommerce-seven-jet.vercel.app/product/headphone",
            'Access-Control-Request-Headers': "X-Custom-Header",
            'Access-Control-Allow-Methods' : "POST"
        }
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

    axios.post(url, data, config)
      .then((response) => {
        toast.success(`Successfully paid ${amount} with MPESA, check your MPESA text message for details`)
      })
      .catch((error) => {
        console.warn(`MPESA error: ${error}`)
      })
}