import axios from "axios";

export default async function sendEmail(name: string, email: string, subject: string, body: string) {
    const data = JSON.stringify({
        "Messages": [{
            "From": { "Email": "oms51857@gmail.com", "Name": "Ahmed hany" },
            "To": [{ "Email": email, "Name": name }],
            "Subject": subject,
            "TextPart": body
        }]
    });

    const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: data,
        headers: { 'Content-Type': 'application/json' },
        auth: { username: '7da22091e4d734a3f361b309b839bdfd', password: '3833bfc1a20e20048e0634cbb831b04a' },
    };

    // FIX: watch this video: https://www.youtube.com/watch?v=PNtFSVU-YTI&ab_channel=WebDevSimplified 

    return axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.error(error);
        });
}
