import Moralis from "moralis";

async function addMoralis(){
    await Moralis.start({
        apiKey: "eyJub25jZSI6IjUxNzE3MDdmLTY2MzMtNGViYS1hYzU4LWQyYzYwNWQ0MzFlNyIsIm9yZ0lkIjoiNDM2OTc0IiwidXNlcklkIjoiNDQ5NTM1IiwidHlwZUlkIjoiOWU5MmNkZmEtMDM2Yy00YmY5LWJlYzAtMmFkNDU3ZmUxODQ2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDIzMTk5MzksImV4cCI6NDg5ODA3OTkzOX0"
    })
    try{
     const response = await Moralis.Streams.add({
        webhookUrl: "it's Important Anf Tuff++++",
        description: "My First Stream",
        tag: "My-Stream",
        chains: "0xaa36a7",
        includeNativeTxs: true
     })
     console.log(response.toJSON().id)
    }catch(error){
        console.log(error)
    }
}
addMoralis()