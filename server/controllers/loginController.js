const prisma = require('../prisma/client')

exports.userLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findMany({
            where:{
                username: username
            }
        })
        if (!user) {
            res.status(404).json({ error: "USER_NOT_FOUND" });
        } else if (user[0].password === password) {
            const payload = {
                first_name: user[0].firstName,
                username: user[0].username,
                password: user[0].password
            };
            res.status(200).json(payload);
        } else {
            res.status(401).json({ error: "INCORRECT_PASSWORD" });
        }
    } catch (err) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};
