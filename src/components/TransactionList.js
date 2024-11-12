import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
import { useTranslation } from "react-i18next";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { t } = useTranslation();

  return (
    <>
      <h3>{t("history")}</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
