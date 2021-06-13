import dotenv from "dotenv";

dotenv.config();

export const getInfuraKey = () => {
  return process.env.INFURA_KEY;
};

export const getPrivateKey = () => {
  return process.env.PRIVATE_KEY;
};

export const getMaticKey = () => {
  return process.env.MATIC_KEY;
};
