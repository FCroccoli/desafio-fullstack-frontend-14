import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserProvider from "./contexts/userContext";
import ModalProvider from "./contexts/modalContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ModalProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
          </Routes>
        </ModalProvider>
      </UserProvider>
    </div>
  );
}

export default App;
