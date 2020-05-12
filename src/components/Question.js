import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, /* formatDate */ } from '../utils/helpers'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Poll from './Poll'

class Question extends Component {

    render() {
        const { question } = this.props

        if (!question) {
            return <p>This question doesn't exist</p>
        }

        const {
            id, name, avatar, options, yourVote /* timestamp, text, hasVotes, votes */
        } = question
        
        return (
            <div className="container">
                <Card>
                    <Card.Header as="h5" className="card-header-personalized">{`${name} asks:`}</Card.Header>
                    <Card.Body>
                        <Image 
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            roundedCircle
                            className="avatar-question"
                        />

                        <div className="center-div" />

                        <div className="content-question">
                            <h5>Would you rather</h5>
                            <p>{options.optionOneValue}</p>
                            <Button variant="primary" className="view-poll-button">View Poll</Button>
                        </div>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Poll 
                    yourVote={yourVote}
                    id={id}
                />
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

export default connect(mapStateToProps)(Question)