import Moralis from "moralis";
async function FetchNft(){
    try{
        await Moralis.start({
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjUxNzE3MDdmLTY2MzMtNGViYS1hYzU4LWQyYzYwNWQ0MzFlNyIsIm9yZ0lkIjoiNDM2OTc0IiwidXNlcklkIjoiNDQ5NTM1IiwidHlwZUlkIjoiOWU5MmNkZmEtMDM2Yy00YmY5LWJlYzAtMmFkNDU3ZmUxODQ2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDIzMTk5MzksImV4cCI6NDg5ODA3OTkzOX0.KJedJagP4WpP9P7REwaQMiLtoFJ56MJ8VKoLqMCRCXo"
        })
    
        const responce = await Moralis.EvmApi.nft.getMultipleNFTs({
            chain: "0xaa36a7",
            tokens:[
                {tokenAddress: "0xfDDa6A7282569c1ADAe131fbEC99dF1Ab670CA5e",
                    tokenId: 0
                },
                {tokenAddress: "0xfDDa6A7282569c1ADAe131fbEC99dF1Ab670CA5e",
                    tokenId: 1
                },
                {tokenAddress: "0xfDDa6A7282569c1ADAe131fbEC99dF1Ab670CA5e",
                    tokenId: 2
                }
            ]
            // format: "decimal",
            // address: "0xfDDa6A7282569c1ADAe131fbEC99dF1Ab670CA5e",
            // mediaItems: false
        })
    
        console.log(responce.raw)
    }catch(err){
        console.log(err)
    }l
}

FetchNft()
