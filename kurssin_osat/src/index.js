import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({text}) => (
    <h1>{text}</h1>
)

const Osa = ({osa}) => (
    <p>{osa.nimi} {osa.tehtavia}</p>
)

const Sisalto = ({osat}) => (
    <div>
    <Osa osa={osat[0]}/>
    <Osa osa={osat[1]}/>
    <Osa osa={osat[2]}/>
    </div>
)

const Yhteensa = ({osat}) => (
    <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>
)

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko text={kurssi.nimi}/>
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
