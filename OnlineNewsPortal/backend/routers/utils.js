const multer = require("multer");
const router = require("express").Router();
const { SMTPClient } = require("emailjs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

const initMail = () => {
  return new SMTPClient({
    user: "shivamish611@gmail.com",
    password: "uvzuapdfsegbdctg",
    host: "smtp.gmail.com",
    ssl: true,
  });
};

const client = initMail();
const sendMail = (to, subject, text) => {
  client.send(
    {
      text: text,
      from: "shivamish611@gmail.com",
      to: to,

      cc: "",
      subject: subject,
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};

router.post("/sendmail", (req, res) => {
  const data = req.body;
  sendMail(data.to, data.subject, data.text);
  res.status(200).json({ message: "mail sent successfully" });
});

router.post("/", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("Email Sent successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
