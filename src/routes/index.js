import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
