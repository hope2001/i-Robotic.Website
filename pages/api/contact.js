import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const {firstName, lastName, email, object, message} = req.body;
  if (!firstName || !lastName || !email || !object || !message) {
    return res.status(400).json({ error: 'Veuillez remplir tous les champs' });
  }

  // create reusable transporter object using the default SMTP transport
  const systemeMail = "supportsanttra@bourjon.com";
  const systemeMailPass = "DZThav@732";
  let transporter = nodemailer.createTransport({
    // pool: true,
    host: 'smtp.office365.com',
    // port: 465,
    port: 587,
    secure: false,
    auth: {
      user: systemeMail,
      pass: systemeMailPass,
    },
  });
  // verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
  try {
      // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${lastName} ${firstName}" <${systemeMail}>`,
    to: systemeMail, 
    subject: `${object}`,
    html: `
    <!DOCTYPE html >
>
  <body
    style="
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      /* font-family: Arial, Helvetica, sans-serif; */
      font-family: Montserrat;
    "
  >

    <div
      style="
        width: 100%;
        background: rgba(255, 255, 255, 0.813);
        /* border-radius: 25px; */
        border: 2px rgb(146, 146, 146) solid;
        padding: 5px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
      "
    >

      <div style="margin:  auto; width: 100%; text-align: center; background-color: rgb(230, 230, 230);">
        <div style="background-color: teal; width: 100%; padding: 35px;border-radius: 5px;margin: 0 auto;">
          <img src="https://santtra.com/assets/img/logo.png" alt="" />
        </div>

        <div
          style="
            margin: 20px auto;
            background: white;
            width: 90%;
            border-radius: 10px;
            padding: 10px;
            text-align: left;
          "
        >

          <div style="margin-bottom: 30px; padding: 15px;">
            <div style="text-align: center;">
                <h2 style="color: darkred; margin: auto;">Contact SANTTRA</h2>
            </div>
            Bonjour !!!  <br/>
             <br />
                  ${firstName} ${lastName}  vous à contacté pour:
            <div style="width: 90%; margin: 15px auto; padding: 12px; color: rgb(215, 64, 0); background-color: azure; border-radius: 10px;">${object}</div> 
            <div><strong>Son message dit</strong>:</div> 
            <p style="width: 90%; margin: 15px auto; padding: 15px;  background-color: lavender; border-radius: 10px;">${message}</p> 
            <p>Vous pouvez lui répondre via son mail <a href="mailto:${email}"> ${email} </a></p> 
            <p style="margin-top: 30px;"> <strong>Cordialement</strong> !!! </p> 

          </div>


        </div>
      </div>
    </div>
  </body>
</html>
    `,
  });
      // send mail with defined transport object
  let infoToClient = await transporter.sendMail({
    from: `"${lastName} ${firstName}" <${systemeMail}>`,
    to: email, 
    subject: `${object}`,
    html: `
    <!DOCTYPE html >
>
  <body
    style="
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      /* font-family: Arial, Helvetica, sans-serif; */
      font-family: Montserrat;
    "
  >

    <div
      style="
        width: 100%;
        background: rgba(255, 255, 255, 0.813);
        padding: 5px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
      "
    >

      <div style="margin:  auto; width: 100%; text-align: center; background-color: rgb(230, 230, 230); padding: 10px;">
        <div style="background-color: teal; width: 100%; padding: 35px;border-radius: 5px;margin: 0 auto;">
          <img src="https://santtra.com/assets/img/logo.png" alt="" />
        </div>

        <div
          style="
            margin: 20px auto;
            background: white;
            width: 90%;
            border-radius: 10px;
            padding: 10px;
            text-align: left;
          "
        >

          <div style="margin-bottom: 30px; padding: 15px;">
            <div style="text-align: center;">
                <h2 style="color: darkred; margin: auto;">Contact SANTTRA</h2>
            </div>
            Bonjour !!!  <br/>
                  ${firstName} ${lastName}  Nous avons reçu avec interet votre message:
                  <div><strong>Objet</strong>:</div> 
            <div style="width: 90%; margin: 15px auto; padding: 12px; color: rgb(215, 64, 0); background-color: azure; border-radius: 10px;">${object}</div> 
            <div> <strong> Message</strong>:</div> 
            <p style="width: 90%; margin: 15px auto; padding: 15px;  background-color: lavender; border-radius: 10px;">${message}</p> 
            <p>Nous vous revenons au plus vite </p> 
            <p style="margin-top: 30px;"> Cordialement !!! </p> 

          </div>

        </div>
      </div>
    </div>
  </body>
</html>
    `,
  });

  res.status(200).json({ message: 'Email soumis avec success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur systeme' });
    
  }


}
