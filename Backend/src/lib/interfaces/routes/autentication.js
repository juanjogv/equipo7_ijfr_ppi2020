const router = require('express').Router();
const authController = require('../controllers/authController')

router.post('/login', async (req, res) => {
	try {
		await authController.login(req);
		res.json({ valid: true });
	} catch (error) {
		if (error === "EMAIL_NOT_FOUND" || error === "EMAIL_AND_PASS_NOT_MATCH") {
			res.json({
				valid: false,
				msg: error,
			})
		} else {
			console.log(error);
		}
	}
});

router.post("/signin", async (req, res) => {
	try {
		await authController.signin(req);
		res.json({ valid: true });
	} catch (error) {
		if (error === "ERR_DUP_ENTRY") {
			res.json({
				valid: false,
				msg: error,
			})
		} else {
			console.log(error);
		}
	}
});

module.exports = router;