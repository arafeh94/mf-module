import "./App.css";
import {Route, Routes} from "react-router-dom";
import {type Course, useAppContext} from "lms-core";
import {Suspense, useEffect, useState} from "react";

function Home() {
    return (
        <div style={{
            borderRadius: "12px",
            border: "2px solid white",
            padding: "20px",
        }}>
            <div>This area is controlled by the LMS APP</div>

        </div>
    )
}

function Courses() {
    const context = useAppContext()
    const [courses, setCourses] = useState<Course[]>([])
    useEffect(() => {
        context.api.courses.getAll().then((res) => {
            console.log(res)
            return res
        }).then(setCourses)
    }, [context])
    return (
        <div>
            <Suspense fallback={<div>Loading LMS...</div>}>
                <div style={{
                    borderRadius: "12px",
                    border: "2px solid black",
                    padding: "20px",
                    borderColor: "white"
                }}>
                    {courses.map((c, i) => (
                        <div key={i}>{c.name}</div>
                    ))}
                </div>
            </Suspense>
        </div>
    );
}


function App() {
    return (
        <section id="center">

            <Routes>
                <Route index element={<Home/>}/>
                <Route path='courses' element={<Courses/>}/>
            </Routes>
        </section>
    );
}

export default App;