import { useEffect, useState } from 'react'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FcNext, FcPrevious } from 'react-icons/fc'

const App = () => {
  const [person, setPerson] = useState(data[0])
  const nextPerson = (index) => {
    if (index < data.length - 1) {
      setPerson(data[++index])
    }
    else setPerson(data[0])
  }
  const previousPerson = (index) => {
    if (index > 0) {
      setPerson(data[--index])
    }
    else setPerson(data[data.length - 1])
  }
  const randomPerson = () => {
     const index = Math.floor(Math.random() * 4)
     setPerson(data[index])
  }
  return (
    <main>
      <article className="review" key={person.id}>
        <div className="img-container">
          <img src={person.image} alt="" className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h4 className="author">{person.name}</h4>
        <p className="job">{person.job}</p>
        <p className="info">{person.text}</p>
        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() => previousPerson(person.id - 1)}
          >
            <FcPrevious />
          </button>
          <button
            className="next-btn"
            onClick={() => nextPerson(person.id - 1)}
          >
            <FcNext />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>surprise me</button>
      </article>
    </main>
  )
}
export default App
