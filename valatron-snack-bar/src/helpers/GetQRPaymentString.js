import czechAccountToIBAN from "./CzechAccountToIBAN";

export default function getQRPaymentString(bankAccount, recipient, recipientMessage, amount, variableSymbol) {
  let qrFormattedData = "SPD*1.0*";

  qrFormattedData += "ACC:" + czechAccountToIBAN(bankAccount) + "*";
  qrFormattedData += "RN:" + recipient + "*";
  qrFormattedData += "MSG:" + recipientMessage + "*";
  qrFormattedData += "AM:" + amount + "*";
  qrFormattedData += "CC:CZK*";
  qrFormattedData += "X-VS:" + variableSymbol + "*";

  return qrFormattedData;
}
