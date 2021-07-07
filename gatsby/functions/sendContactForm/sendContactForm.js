const nodemailer = require('nodemailer');
/* const nodemailerSendgrid = require('nodemailer-sendgrid'); */
/*
const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);
*/
function generateContactEmail({ body, total }) {
  return `<div>
    <h2>Your Contact Request</h2>
    <p>From: ${body.name}</br>
    <p>Email: ${body.email}</p>
    <ul>${body.estimate.map((item) => `<li>${item.name}</li>`)}</ul></div>`;
}
// create transport for nodemailer

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
exports.handler = async (event, context) => {
  await wait(5000);
  const requiredFields = ['name', 'email'];
  const body = JSON.parse(event.body);

  for (const field of requiredFields) {
    console.log(`checking ${field} of form`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Please fill out the '${field}'-field.`,
        }),
      };
    }
  }

  // send mail
  const info = await transporter.sendMail({
    from: 'swestphal <hello@swestphal.io>',
    to: `hello@swestphal.io`,
    subject: 'New contact request',
    html: generateContactEmail({ body, total: body.total }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
