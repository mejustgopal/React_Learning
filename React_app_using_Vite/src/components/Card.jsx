import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="image"><img src="https://imgs.search.brave.com/vzVb420qkaR-r4_3HMcbvH5eNniSvO1Ieq69YJzhYxY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/M3UwNGg1LmpwZw" alt="billa" /></div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default Card
