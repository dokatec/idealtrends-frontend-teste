import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaginaCadastro from "./pages/PaginaCadastro";

export default function App() {
  return (
    <div>
      <ToastContainer />
      <PaginaCadastro />
    </div>
  );
}
