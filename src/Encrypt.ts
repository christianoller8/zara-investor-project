import * as CryptoJS from "crypto-js";

export class Encrypt {
  plainText = "";
  encryptText = "";
  encPassword = "";
  decPassword = "";
  conversionEncryptOutput = "";
  conversionDecryptOutput = "";

  public encryptCode() {
    return (this.conversionEncryptOutput = CryptoJS.AES.encrypt(
      this.plainText.trim(),
      this.encPassword.trim(),
    ).toString());
  }

  public decryptCode() {
    return (this.conversionDecryptOutput = CryptoJS.AES.decrypt(
      this.encryptText.trim(),
      this.decPassword.trim(),
    ).toString(CryptoJS.enc.Utf8));
  }
}
