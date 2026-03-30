import React from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./components/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <DarkModeProvider>
      <AppLayout />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </DarkModeProvider>
  );
}

export default App;
