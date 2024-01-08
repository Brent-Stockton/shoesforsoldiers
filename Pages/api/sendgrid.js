import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const { name, email, phoneNumber, message } = req.body;

    // Replace the following line with the dynamic template
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <!-- Your meta tags here -->
      </head>
      <body>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Message: ${message}</p>
        <!-- Include the rest of your dynamic template here -->
      </body>
      </html>
    `;

    await sendgrid.send({
      to: "brentstockton1@gmail.com", // Replace with your recipient's email address
      from: "brentstockton1@gmail.com", // Replace with your sender's email address
      subject: "Contact Form Submission",
      html,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ message: "Email sent successfully" });
}

export default sendEmail;
