const router = require('express').Router();
const authController = require('../controllers/authController')

router.post('/login', async (req, res) => {
	try {
		await authController.login(req);
		res.json({ validPass: true });
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
	const { nombre_usuario, contrasena_usuario, apellido_usuario, email_usuario } = req.body
	const newUser = {
		nombre_usuario,
		contrasena_usuario,
		apellido_usuario,
		email_usuario
	}
	const rows = await connection.query('SELECT * FROM usuario where email_usuario = ?', email_usuario);

	if (rows.length > 0) {
		res.send('false');
	} else {
		newUser.contrasena_usuario = await helpers.encryptPassword(contrasena_usuario);
		await connection.query('INSERT INTO usuario set ?', [newUser]);
	}
});

router.get("/signin/:email", async (req, res) => {
	const { email } = req.params

	const rows = await connection.query('SELECT * FROM usuario WHERE email_usuario = ?', email);

	if (rows.length > 0) {
		res.json({ boolean: false });
	} else {
		res.json({ boolean: true });
	}
});


module.exports = router;