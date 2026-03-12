import { createRoot } from "react-dom/client";
import HelloWorld from "./Helloworld";
import Container from "./container";
import "./custom.css";

createRoot(document.getElementById("root"))
    .render(
        <div className="card"><div>
            <Container>
             <HelloWorld/>
            </Container>
        </div>
    </div>
)
