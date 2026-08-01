const prisma = require("../prisma/client");

exports.getUserDetails = async (req, res) => {
	const { username } = req.body;
	try {
		const user = await prisma.user.findMany({
			where: {
				username: username,
			},
		});

		if (!user) {
			res.status(404).send("No user data found.");
		} else {
			res.status(200).json(user);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.editUserDetails = async (req, res) => {
	const { username, data } = req.body;

	try {
		await prisma.user.updateMany({
			where: {
				username: username,
			},
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				phone: data.phone,
			},
		});

		res.status(200).send("User details updated successfully.");
	} catch (err) {
		res.status(500).send(err.message);
	}
};
