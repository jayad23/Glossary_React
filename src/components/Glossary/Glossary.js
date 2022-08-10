import React from 'react'
import { glossaryStyles } from "./glossary.styles"
const Glossary = ({ weeks, topics, event}) => {
  return (
    <React.Fragment>
        <React.Fragment>
            {
                weeks.map((week, idx) => 
                    <h3 key={idx + 1}>{week}</h3>
                )
            }
        </React.Fragment>
        <React.Fragment>
            {
                topics.map(topic =>
                    <button 
                        onClick={() => event(topic.day)}
                        key={topic.day}
                        style={glossaryStyles}
                        >
                        {topic.topic}
                    </button> 
                )
            }
        </React.Fragment>
    </React.Fragment>
  )
}

export default Glossary