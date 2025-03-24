import Moralis from "moralis";

async function testMoralis() {
  await Moralis.start({ apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjUxNzE3MDdmLTY2MzMtNGViYS1hYzU4LWQyYzYwNWQ0MzFlNyIsIm9yZ0lkIjoiNDM2OTc0IiwidXNlcklkIjoiNDQ5NTM1IiwidHlwZUlkIjoiOWU5MmNkZmEtMDM2Yy00YmY5LWJlYzAtMmFkNDU3ZmUxODQ2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDIzMTk5MzksImV4cCI6NDg5ODA3OTkzOX0.KJedJagP4WpP9P7REwaQMiLtoFJ56MJ8VKoLqMCRCXo" });
  console.log("✅ Moralis Successfully Initialized!");
}

testMoralis();
