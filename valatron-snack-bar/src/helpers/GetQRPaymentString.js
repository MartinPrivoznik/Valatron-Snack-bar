import czechAccountToIBAN from "./CzechAccountToIBAN";

export default function getQRPaymentString(bankAccount, recipient, recipientMessage, amount) {
  let qrFormattedData = "SPD*1.0*";

  qrFormattedData += "ACC:" + czechAccountToIBAN(bankAccount) + "*";
  qrFormattedData += "RN:" + recipient + "*";
  qrFormattedData += "MSG:" + recipientMessage + "*";
  qrFormattedData += "AM:" + amount + "*";
  qrFormattedData += "CC:CZK*";

  return qrFormattedData;
}
