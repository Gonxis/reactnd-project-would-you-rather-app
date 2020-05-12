import React, { Component } from "react"
import { connect } from "react-redux"
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'

class Poll extends Component {
    render () {
        const { id, yourVote } = this.props

        return (
            <div>
                {
                yourVote ?
                <AnsweredPoll
                id={id}
                /> :
                <UnansweredPoll
                id={id}
                />
                }
            </div>
        )
    }
}

export default connect()(Poll)