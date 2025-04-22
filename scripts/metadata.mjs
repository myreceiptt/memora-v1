import prisma from "./prisma.mjs";

const NFTs = [
  {
    name: "Sovenir Digital 1",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "1/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 2",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "2/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 3",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "3/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 4",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Rare",
      Type: "Sovenir Digital CK1",
      Edition: "4/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 5",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "5/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 6",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "6/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 7",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Rare",
      Type: "Sovenir Digital CK1",
      Edition: "7/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 8",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "8/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 9",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "9/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 10",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Common",
      Type: "Sovenir Digital CK1",
      Edition: "10/11",
      Year: "2024",
    },
  },
  {
    name: "Sovenir Digital 11",
    description: "Sovenir Digital Cipta Kawasan 1",
    image:
      "ipfs://QmZeRP8UxeGrJc3oV82fGvdB8JzMxDs4FdyAGGrDd5ro6Z/cipta-kawasan.png",
    attributes: {
      Rarity: "Rare",
      Type: "Sovenir Digital CK1",
      Edition: "11/11",
      Year: "2024",
    },
  },
];

const main = async () => {
  try {
    await prisma.nFT.createMany({
      data: NFTs.map((nft) => ({
        ...nft,
        minted: false,
      })),
    });
  } catch (e) {
    console.error("Error details:", e);
    console.error("Error name:", e.name);
    console.error("Error message:", e.message);
    if (e.code) console.error("Error code:", e.code);
  }
};

main();
