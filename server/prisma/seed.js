const prisma = require("./client");

const users = [
	{
		username: "SobczakL",
		password: "password",
		email: "SobczakL@rora.com",
		firstName: "Lucas",
		lastName: "Sobczak",
		phone: "416-123-1234",
	},
	{
		username: "Rora",
		password: "futureuser",
		email: "hello@rora.com",
		firstName: "New",
		lastName: "User",
		phone: "000-000-0000",
	},
];

const firstRoute = {
	id: "23ffdd38-325b-48f4-98f2-3684d74f49f0",
	username: "SobczakL",
	routeId: "TTC:83903",
	routeNumber: "121",
	routeHeading: "West",
	routeName: "Esplanade-River",
	routeType: "3",
};

async function main() {
	await prisma.userSavedRoutes.deleteMany();
	await prisma.user.deleteMany();
	console.log("*** cleared existing data ***");

	await prisma.user.createMany({ data: users });
	console.log("*** users saved ***");

	await prisma.userSavedRoutes.create({ data: firstRoute });
	console.log("*** first saved route ***");
}

main()
	.catch((err) => {
		console.error(err);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
