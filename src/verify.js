import axios from "axios";

export default function Verify(props)
{
    const url = new URLSearchParams(document.location.search);

    if (!url.has('trxref')) {
        alert('something went wrong')
        window.location.href = '/'
    }

    const ref = url.get('trxref');

    axios.get(props.VERIFY_URL + ref , {
        headers: {
            'Authorization': `Bearer ${props.PAYSTACK_SK}`,
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        const data = response.data;
        const message = data.message;
        alert(message);
        window.location.href = "/"
    }).catch(error => {
        console.log(error);
        alert('something went wrong');
        window.location.href = "/"
    })

    return (
        <></>
    )
}
