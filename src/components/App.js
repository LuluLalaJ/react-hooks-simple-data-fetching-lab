// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const apiUrl = "https://dog.ceo/api/breeds/image/random"

    const [dogImage, setDogImage] = useState('')

    useEffect(() => {
        fetch(apiUrl)
        .then(r => r.json())
        .then(data => setDogImage(data.message))
    }, [])

    if (!dogImage) {
        return <p>Loading...</p>
    }
    return (
        <img
            alt="A Random Dog"
            src={dogImage}
        ></img>
    )
}


export default App 
