const router = require("express").Router();
const Model = require("../models/newsModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("News data saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("News data fetched successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/approvenews", (req, res) => {
  Model.find({approvenews:true})
    .then((data) => {
      console.log("News data fetched successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({message : 'success'});
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.status(200).json({message : 'success'});
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// for exporting router
module.exports = router;