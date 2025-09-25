import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../const'

function HomePage() {
    return (
        <div>
            <h1>Quiz App</h1>
            <Link to={ROUTES.QUIZ}>Start!</Link>
        </div>
    )
}

export default HomePage