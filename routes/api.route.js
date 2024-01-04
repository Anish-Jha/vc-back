const issueDID = require("../functions/issue_did");
const issueDIDToOrg = require("../functions/issue_org_did");
const issueVC = require("../functions/issue_vc");
const validateVC = require("../functions/validate_vc");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/issue-did", issueDID);
router.get("/issue-did-to-org", issueDIDToOrg);
router.get("/issue-vc", issueVC);
router.get("/validate-vc", validateVC);

module.exports = router;
