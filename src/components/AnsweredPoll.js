import React, { Component } from "react"
import { connect } from "react-redux"
import { formatQuestion } from '../utils/helpers'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'

class AnsweredPoll extends Component {
    render () {

        const { question } = this.props
        const { name, avatar, options, votes } = question

        return (
            <div className="container">
                <Card>
                    <Card.Header as="h5" className="card-header-personalized">{`Asked by ${name}`}</Card.Header>
                    <Card.Body>
                        <Image 
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            roundedCircle
                            className="avatar-question"
                        />

                        <div className="center-div-answered-poll" />

                        <div className="content-question">
                            <h3>Results:</h3>
                            <div>
                                <h6>Would you rather {options.optionOneValue}?</h6>
                                <ProgressBar 
                                    now={options.optionOneVotes.length / votes * 100} 
                                    label={`${options.optionOneVotes.length / votes * 100}%`} 
                                />
                                <span>{options.optionOneVotes.length} out of {votes} votes</span>
                            </div>
                            <div>
                                <h6>Would you rather {options.optionTwoValue}?</h6>
                                <ProgressBar 
                                    now={options.optionTwoVotes.length / votes * 100} 
                                    label={`${options.optionTwoVotes.length / votes * 100}%`} 
                                />
                                <span>{options.optionTwoVotes.length} out of {votes} votes</span>
                            </div>
                        </div>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question: question ? 
            formatQuestion(question, users[question.author], authedUser) : 
            null
    }
}

export default connect(mapStateToProps)(AnsweredPoll)