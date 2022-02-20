import faunadb from "faunadb";
const client = new faunadb.Client({
  secret: "fnAEfMD6mGAAwPRAAvjQzB71xdSluqDmdgS23SEp",
  domain: "Ydb.eu.fauna.com",
});

const q = faunadb.query;
export { client, q };