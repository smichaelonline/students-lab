const Score = (props) => {
  return (
    <>
      <h4>Date: {props.score.date}</h4>
      <h5>Score: {props.score.score}</h5>
    </>
  )
}

export default Score