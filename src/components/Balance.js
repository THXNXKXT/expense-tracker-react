import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useTranslation } from "react-i18next";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const { t } = useTranslation();

  return (
    <>
      <h4>{t("balance")}</h4>
      <h1>${total}</h1>
    </>
  );
};
