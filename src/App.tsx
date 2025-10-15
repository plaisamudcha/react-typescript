import { Slide, ToastContainer } from "react-toastify";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container />
      <ToastContainer
        autoClose={2000}
        position="bottom-right"
        transition={Slide}
      />
    </>
  );
}

export default App;
