import CryptoJS from "crypto-js";
import sha1 from "js-sha1";

const secret = process.env.REACT_APP_SECRET_KEY;

export const encryptData = (data) => {
  const cipherText = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secret
  ).toString();
  return cipherText;
};

export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secret);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

export const hashPassword = (password) => {
  const hashedPassword = sha1(password);
  return hashedPassword;
};
