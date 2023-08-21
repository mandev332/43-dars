import nodemailer from "nodemailer";

const sendMail = (to, subject, code) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nodirbekqobilov332@gmail.com",
            pass: "ixotdzlfgzewxlsg",
        },
    });
    let mailOptions = {
        from: "nodirbekqobilov332@gmail.com",
        to,
        subject,
        html: `<h1>Royxatdan o'tish uchun link</h1>
        <h3>havolani bosing</h3>
        <a href="http://10.10.3.20:3000/password/${code}" >https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4N2WSR6tNs1iyoOAdarZ2d47ulR0EDLoMqM0SV7DMbPzB8BN27-w9z-7Mm1muuhvcfqUSJMtvCy-Bs9cMmY_YXoqvMUMQ</a>`,
    };
    return transporter.sendMail(mailOptions); // promise
};

export default sendMail;
