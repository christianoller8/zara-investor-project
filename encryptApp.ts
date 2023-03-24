import * as CryptoJS from "crypto-js";
//import { Encrypt } from "./src/Encrypt";

const encryptedCode = "U2FsdGVkX19bvCeMLDbyVA+JIx7MM5iD4Y81AUD4Bsg=";
const key = "12345";

const deCrypt = CryptoJS.AES.decrypt(encryptedCode, key).toString(CryptoJS.enc.Utf8);
console.log(deCrypt);

//const decrypt = new Encrypt;
//const encoded = decrypt.decryptCode();
//console.log(encoded);
