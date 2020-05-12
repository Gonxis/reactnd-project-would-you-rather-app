import React, { Component } from "react"
import { connect } from "react-redux"
import { formatQuestion } from '../utils/helpers'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class UnansweredPoll extends Component {
    render () {
        const { question } = this.props
        const { name, avatar, options, } = question

        return (
            <div className="container">
                <Card>
                    <Card.Header as="h5" className="card-header-personalized">{`${name} asks: `}</Card.Header>
                    <Card.Body>
                        <Image 
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            roundedCircle
                            className="avatar-unanswered-question avatar-question"
                        />

                        <div className="center-div-unanswered-question" />

                        <div className="unanswered-poll-container">
                            <div className="content-unanswered-question">
                                <h3>Would You Rather...</h3>
                                <Form className="unanswered-poll-form">
                                    <div className="radio-buttons-unanswered-question">
                                        {options.values.map((value) => (
                                            <Form.Check 
                                                key={value}
                                                type='radio'
                                                id={`${value}`}
                                                label={`${value}`}
                                                name="wouldYouRatherQuestion"
                                            />
                                        ))}
                                    </div>
                                    <Button className="submit-button-unanswered-question">Submit</Button>
                                </Form>
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

export default connect(mapStateToProps)(UnansweredPoll)