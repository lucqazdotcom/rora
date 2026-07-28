const prisma = require("./client")

const firstUser = {
    username: "SobczakL",
    password: "password",
    email: "SobczakL@rora.com",
    firstName: "Lucas",
    lastName: "Sobczak",
    phone: "416-123-1234",
    cardNumber: null,
    exDate: null,
    cvc: null,
    zip: null,
}

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
    await prisma.userSavedRoutes.deleteMany()
    await prisma.user.deleteMany()
    console.log("*** cleared existing data ***")

    await prisma.user.create({ data: firstUser })
    console.log("*** first user saved ***")

    await prisma.userSavedRoutes.create({ data: firstRoute })
    console.log("*** first saved route ***")
}

main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
