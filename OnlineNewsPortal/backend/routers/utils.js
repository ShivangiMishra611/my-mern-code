const multer = require("multer");
const router = require("express").Router();
const { SMTPClient } =  require('emailjs');

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
    user: 'user',
    password: 'uvzuapdfsegbdctg',
    host: 'smtp.gmail.com',
    ssl: true,
  });
}

const client = initMail();
const sendMail = (to, subject, text) => {
  client.send(
    {
      text: text,
      from: '',
      to: to,
      cc: '',
      subject: subject,
    },
    (err, message) => {
      console.log(err || message);

    }
  );
}


router.post

module.exports = router;