const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/about.html"));
});

router.get("/careers", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/careers.html"));
});

router.get("/location", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/location.html"));
});

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const msg = {
    from: `"Scoot.com Contact Form" <ithaca.deploymen@gmail.com>`,
    to: "ithaca.deployment@gmail.com",
    subject: "New message from contact form at Scoot.com",
    text: `${name}, ${email}, has sent the following message:
            ${message}.`,
  };

  const info = transporter.sendMail(msg, (error, response) => {
    if (error) {
      res.sendFile(path.join(__dirname, "/../public/contact-failure.html"));
    } else {
      res.sendFile(path.join(__dirname, "/../public/success.html"));
    }
  });
});

router.post("/apply", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const msg = {
    from: `"Scoot.com Application Form" <ithaca.deployment@gmail.com>`,
    to: "ithaca.deployment@gmail.com",
    subject: "New job application at Scoot.com",
    text: `${name}, ${email}, has sent the following message:
            ${message}.`,
  };

  const info = transporter.sendMail(msg, (error, response) => {
    if (error) {
      res.sendFile(path.join(__dirname, "/../public/apply-failure.html"));
    } else {
      res.sendFile(path.join(__dirname, "/../public/success.html"));
    }
  });
});

router.use(express.static(path.join(__dirname, "/../public")));

module.exports = router;
