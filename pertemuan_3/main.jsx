import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwinds.css';
import UserForm from "./UserForm";

createRoot(document.getElementById("root"))
  .render(
    <div>
      <UserForm/>
    </div>
  )