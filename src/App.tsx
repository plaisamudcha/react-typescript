import { Slide, ToastContainer } from "react-toastify";
import Container from "./components/Container";
import { AuthContextProvider } from "./stores/AuthcontextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Container />
        <ToastContainer
          autoClose={2000}
          position="bottom-right"
          transition={Slide}
        />
      </AuthContextProvider>
    </>
  );
}

export default App;
