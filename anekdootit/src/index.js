import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const MostVotes = ({anecdotes, pisteet}) => {
    let i
    let max = -1
    for (let j = 0; j < pisteet.length; j++) {
        if (max < pisteet[j]) {
            i = j
            max = pisteet[j]
        }
    }
    return (
        <div>
            <h1>anecdote with most votes:</h1>
            {anecdotes[i]}<br/>
            has {pisteet[i]} votes<br/>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            pisteet: props.anecdotes.map((anecdote) => 0)
        }
    }

    getAnecdote = () => () => {
        this.setState({ selected: Math.floor(Math.random() * this.props.anecdotes.length ) });
    }
    vote = () => () => {
        let kopio = [...this.state.pisteet]
        kopio[this.state.selected]++;
        this.setState({ pisteet: kopio });
    }
    render() {
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}<br/>
                has {this.state.pisteet[this.state.selected]} votes<br/>
                <Button handleClick={this.vote()} text={"vote"}/>
                <Button handleClick={this.getAnecdote()} text={"next anecdote"}/>
                <MostVotes anecdotes={this.props.anecdotes} pisteet={this.state.pisteet}/>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
