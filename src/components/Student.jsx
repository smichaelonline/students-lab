import { useState } from "react";
import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <h3> {props.student.name}</h3>
      <h4> {props.student.bio}</h4>
      {props.student.scores.map(score => 
        <Score score={score}/>
        )}
    </>
  )
}

export default Student