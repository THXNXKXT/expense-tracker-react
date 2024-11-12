// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: "Expense Tracker",
      balance: "Your Balance",
      income: "Income",
      expense: "Expense",
      history: "History",
      addTransaction: "Add new transaction",
      textLabel: "Text",
      enterTextPlaceholder: "Enter text...",
      amountLabel: "Amount",
      enterAmountPlaceholder: "Enter amount...",
      addTransactionButton: "Add transaction",
    },
  },
  th: {
    translation: {
      header: "ติดตามค่าใช้จ่าย",
      balance: "ยอดเงินของคุณ",
      income: "รายรับ",
      expense: "รายจ่าย",
      history: "ประวัติ",
      addTransaction: "เพิ่มธุรกรรมใหม่",
      textLabel: "รายละเอียด",
      enterTextPlaceholder: "กรอกข้อมูล...",
      amountLabel: "จำนวนเงิน",
      enterAmountPlaceholder: "กรอกจำนวนเงิน...",
      addTransactionButton: "เพิ่มธุรกรรม",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // ภาษาเริ่มต้น
    keySeparator: false, // ไม่ใช้ตัวแบ่งคีย์
    interpolation: {
      escapeValue: false, // React จัดการ escape อยู่แล้ว
    },
  });

export default i18n;
