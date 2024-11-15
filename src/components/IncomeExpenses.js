import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useTranslation } from "react-i18next";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const { t } = useTranslation();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>{t("income")}</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>{t("expense")}</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};
