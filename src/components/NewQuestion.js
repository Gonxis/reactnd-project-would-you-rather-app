import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewQuestion extends Component {

    state = {
        textOptionOne: '',
        textOptionTwo: ''
      }

      handleChangeOptionOne = (event) => {
        const textOptionOne = event.target.value
    
        this.setState(() => ({
          textOptionOne
        }))
      }

      handleChangeOptionTwo = (event) => {
        const textOptionTwo = event.target.value
    
        this.setState(() => ({
          textOptionTwo
        }))
      }

      handleSubmit = (event) => {
        event.preventDefault()
    
        const { textOptionOne, textOptionTwo } = this.state
    
        // todo: Add Question to Store
    
        console.log('New Question: ', textOptionOne, textOptionTwo)
    
        this.setState(() => ({
          textOptionOne: '',
          textOptionTwo: ''
        }))
      }

      render() {
        const { textOptionOne, textOptionTwo } = this.state
    
        {/* todo: Redirect to / if submitted */}
        
        return (
            <div className="container-new-question">
                <div className="header-new-question">
                    <h3 className='center'>Create New Question</h3>
                </div>
                <div className="body-new-question">
                    <p>Complete the question:</p>
                    <h5>Would you rather ...</h5>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Option One Text Here" 
                            value={textOptionOne}
                            onChange={this.handleChangeOptionOne}
                            required 
                        />
                        <div class="separator">OR</div>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Option Two Text Here" 
                            value={textOptionTwo}
                            onChange={this.handleChangeOptionTwo}
                            required 
                        />
                        <Button 
                            type="submit" 
                            className="submit-button-create-question" 
                            disabled={textOptionOne === '' || textOptionTwo === '' } 
                        >Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default NewQuestion