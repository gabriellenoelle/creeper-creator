const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const app = express();
const PORT = process.env.PORT || 3001;

const { typeDefs, resolvers } = require("./server/Schema/index.js");
