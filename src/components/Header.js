import React from 'react'
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <h2>
      {t("header")}
    </h2>
  )
}