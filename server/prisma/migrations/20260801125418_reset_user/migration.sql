-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" VARCHAR(40) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "phone" VARCHAR(20),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userSavedRoutes" (
    "id" UUID NOT NULL,
    "username" VARCHAR(40),
    "routeId" VARCHAR(255),
    "routeNumber" VARCHAR(255),
    "routeHeading" VARCHAR(255),
    "routeName" VARCHAR(255),
    "routeType" VARCHAR(255),

    CONSTRAINT "userSavedRoutes_pkey" PRIMARY KEY ("id")
);
