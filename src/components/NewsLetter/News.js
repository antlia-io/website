import React, { Component } from 'react'
import NewsLetter from './NewsLetter'

class Course extends Component {
    render() {
        const { userNewsLetterHandler} = this.props
        return (
            <div>
                <NewsLetter userNewsLetterHandler ={userNewsLetterHandler} />
            </div>
        )
    }
}
export default Course