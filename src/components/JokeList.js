import { useState, useEffect } from "react"
import './JokeList.css'

export default function JokeList() {
    const [jokes, setJokes] = useState([])
   const [url, setURL] = useState('http://localhost:3000/jokes')

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setJokes(json))
    }, [url])

    console.log(jokes)



    return (
        <div className="joke-List">
            <h2>Joke List</h2>
            <ul>
                {jokes.map(joke => (
                    <li key={joke.id}>
                        <h3>{joke.setup}</h3>
                        <h3>{joke.joke}</h3>
                        <p3>{joke.delivery}</p3>
                    </li>
                ))}
            </ul>
        </div>
    )
}