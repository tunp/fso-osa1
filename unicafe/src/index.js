import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistic = ({title, text}) => (<tr><td>{title}</td><td>{text}</td></tr>)

const Statistics = ({feedback}) => {
    let sum = feedback.good - feedback.bad
    let total = feedback.good + feedback.neutral + feedback.bad
    if (total) {
        return (
            <table>
                <tbody>
                    <Statistic title={"hyvä"} text={feedback.good}/>
                    <Statistic title={"neutraali"} text={feedback.neutral}/>
                    <Statistic title={"huono"} text={feedback.bad}/>
                    <Statistic title={"keskiarvo"} text={ sum / total }/>
                    <Statistic title={"positiivisia"} text={ ((feedback.good / total) * 100) + "%" }/>
                </tbody>
            </table>
        )
    } else {
        return (<p>ei yhtään palautetta annettu</p>)
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            feedback: {
                good: 0,
                neutral: 0,
                bad: 0
            }
        }
    }
    addFeedback = (type) => () => {
        let state = { feedback: {...this.state.feedback} }
        state.feedback[type]++;
        this.setState(state)
    }
    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button handleClick={this.addFeedback("good")} text={"hyvä"}/>
                <Button handleClick={this.addFeedback("neutral")} text={"neutraali"}/>
                <Button handleClick={this.addFeedback("bad")} text={"huono"}/>
                <h1>statistiikka</h1>
                <Statistics feedback={this.state.feedback}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
