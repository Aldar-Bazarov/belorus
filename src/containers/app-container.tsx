import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "@components/pages/MainPage";
import MainLayout from "@components/layouts/MainLayout";
import { UpdateIM } from "@components/pages/UpdateIM";
import { SelectionGNO } from "@components/pages/SelectionGNO";
import { CalculationWhatIf } from "@components/pages/CalculationWhatIf";

export const AppContainer: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="" element={<MainPage />} />
      <Route path="/updateIM" element={<UpdateIM />} />
      <Route path="/selectionGNO" element={<SelectionGNO />} />
      <Route path="/calculation" element={<CalculationWhatIf />} />
      </Route>
    </Routes>
  );
};
