import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "0.0.1",
    title: "Raso Makko API",
    description: "API documentation for Raso Makko application",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://raso-mako-2.vercel.app/api",
      description: "Deploy Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "adhityarp",
        password: "123456",
      },
      RegisterRequest: {
        fullName: "adhit adhit",
        username: "adhit2025",
        email: "adhit2025@yopmail.com",
        password: "1234512345",
        confirmPassword: "1234512345",
      },
      ActivationRequest: {
        code: "abcdef",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
