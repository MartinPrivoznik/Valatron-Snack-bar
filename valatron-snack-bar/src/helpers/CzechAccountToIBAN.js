import IBAN from "iban";
import padStart from "./PadStart";

export default function czechAccountToIBAN(czechAccount) {
  let iban = "";
  iban += czechAccount.substring(czechAccount.length - 4);

  iban += padStart(czechAccount.match("^(.*?)-") ?? 0, 6);
  iban += padStart(czechAccount.match("(.*)/")[1], 10);

  for (let i = 0; i < 100; i++) {
    if (IBAN.isValid("CZ" + padStart(i, 2) + iban)) {
      iban = "CZ" + padStart(i, 2) + iban;
      console.log(iban);
      return iban;
    }
  }
}
