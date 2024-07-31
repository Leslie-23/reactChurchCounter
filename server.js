const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "",
    pass: "",
  },
});

app.post("/send-email", (req, res) => {
  const { email, subject, text, attachment } = req.body;

  const mailOptions = {
    from: "",
    to: email,
    subject: subject,
    text: text,
    attachments: [
      {
        filename: "attendance_report.pdf",
        path: attachment,
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
