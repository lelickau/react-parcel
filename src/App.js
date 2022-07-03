import React from 'react'
import { Counter } from './components/Counter'
import { Routes, Route, Link } from "react-router-dom"

import Time from './resources/ico/time.svg'

const App = () => {
    return (
        <div>
            <div>
                <header>
                    <h1>Welcome to React Router!</h1>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
            <Time/>
            <Counter/>
        </div>
    )
}

function Home() {
    return (
        <>
        <main>
            <h2>Welcome to the homepage!</h2>
            <p>You can do this, I believe in you.</p>
        </main>
        <nav>
            <Link to="/about">About</Link>
        </nav>
        </>
    );
}

function About() {
    return (
        <>
        <main>
            <h2>Who are we?</h2>
            <p>
            That feels like an existential question, don't you
            think?
            </p>
        </main>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        </>
    );
}

export default App