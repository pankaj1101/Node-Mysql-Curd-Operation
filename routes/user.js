const express = require("express");
const router = express.Router();

const {
  showTable,
  showTabledata,
  insertData,
  deleteData,
  updateData,
} = require("../controller/user");

router.route("/showtable").get(showTable);
router.route("/showtabledata").get(showTabledata);
router.route("/insertData").get(insertData);
router.route("/deleteData").get(deleteData);
router.route("/updateData").get(updateData);

module.exports = router;