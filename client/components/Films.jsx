import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import Questions from './Questions'

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean'

class Film extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      results: []
    }
  }

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const results = res.body.results
        console.log('results: ', res.body.results)
        this.setState({
          results: results
        })
      })
  }

  // resultHandler(count) {
  //   this.state.score += count
  //   console.log(this.state.score)
  // }

  render() {
    return (
      <div>
        <h1>True or False?</h1>
        <h2>Film</h2>
        {/* <h3>Your Score: {this.state.count}</h3> */}
        {
          this.state.results.map((result, index) => {
            return (
              <div key={index} >
                 {result.question} <br />
                  <button value='true' onClick={() => this.quizAnswerHandler}>True</button>
                  <button value='false' onClick={() => this.quizAnswerHandler}>False</button>
              </div>
            )
          })
        }
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Film