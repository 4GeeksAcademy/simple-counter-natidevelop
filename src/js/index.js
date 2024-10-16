//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import {SecondsCounter} from "./component/secondsCounter.jsx";
let seconds = 0;
let intervalo; 
let sentido = true;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter counter={seconds}/>)
const renderSecondsCounter = () => {
    if (sentido) {
        seconds++;
    } else {
        seconds--;
    }

    app.render(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">

            <div className="d-flex justify-content-center flex-wrap w-100 px-2">
                <SecondsCounter counter={seconds} />
            </div>

            <div className="text-center mt-4 w-50 px-3">
                <input
                    id="finDelMundo"
                    className="form-control mb-3"
                    onChange={(event) => {
                        seconds = event.target.value;
                    }}
                    placeholder="Ingresar Segundos para darle fin a la pagina"
                    type="number"
                />
                <div className="d-flex justify-content-center flex-wrap w-100">
                    <button
                        onClick={() => {
                            clearInterval(intervalo);
                            intervalo=undefined;
                        }}
                        type="button"
                        className="btn m-2 rounded btn-dark text-primary w-15"
                    >
                        Pausar
                    </button>
                    <button
                        onClick={() => {
                            seconds = 0;
                            document.querySelector("#finDelMundo").value = undefined;
                        }}
                        type="button"
                        className="btn m-2 rounded btn-dark text-danger w-15"
                    >
                        Reiniciar
                    </button>
                    <button
                        onClick={() => {
                            if(!intervalo) {
                             intervalo = setInterval(renderSecondsCounter, 1000);
                            }
                        }}
                        type="button"
                        className="btn m-2 rounded btn-dark text-success w-15"
                    >
                        Resumir
                    </button>
                    <button
                        onClick={() => {
                            sentido = !sentido;
                        }}
                        type="button"
                        className="btn m-2 rounded btn-dark w-15"
                    >
                        {sentido ? "Avanzar" : "Retroceder"}
                    </button>
                </div>
            </div>
        </div>
    );

    if (seconds <= 0) {
        alert("FIN DE LA PAGINA!");
        clearInterval(intervalo);
    }
};

intervalo = setInterval(renderSecondsCounter, 1000);