import './App.css'
import {useAppContext} from "lms-core";

function App() {
    const context = useAppContext();
    return (
        <>
            <section id="center">
                <div style={{
                    borderRadius: "12px",
                    border: "2px solid black",
                    padding: "20px",
                    borderColor: "white"
                }}>
                    <div>This area is controlled by the CH:MF_NAME APP</div>
                </div>
            </section>
        </>
    )
}

export default App
