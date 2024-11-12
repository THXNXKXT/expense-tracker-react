import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useTranslation } from "react-i18next"; // นำเข้า useTranslation

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const { t } = useTranslation(); // ใช้ t จาก i18next

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>{t("addTransaction")}</h3> {/* แปลข้อความ "Add new transaction" */}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">{t("textLabel")}</label> {/* แปลข้อความ "Text" */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t("enterTextPlaceholder")} // แปล placeholder
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {t("amountLabel")} <br /> {/* แปลข้อความ "Amount" */}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={t("enterAmountPlaceholder")} // แปล placeholder
          />
        </div>
        <button className="btn">{t("addTransactionButton")}</button> {/* แปลข้อความปุ่ม */}
      </form>
    </>
  );
};
