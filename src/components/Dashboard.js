import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render() {
        return (
            <div className="content">

                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#unanswered">Unanswered questions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#answered">Answered questions</a>
                    </li>
                </ul>


                <div className="tab-content">
                    <div id="unanswered" className="container tab-pane active">
                    <ul className="dashboard-list">
                        {this.props.questionsIds.map(id => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div id="answered" className="container tab-pane fade">
                    <div>
                        Answered Questions
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)