import React, {useState, useEffect} from 'react'
import { Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlanetList = () => {
    const [planets, setPlanet] = useState([])
  
    useEffect( () => {
      axios.get(`https://swapi.co/api/planets/`)
        .then( res => {
          setPlanet(res.data.results)
          })
    }, [])
 
        return (
            <>
                <Header width="30px" style={{fontSize: '4em', fontFamily: 'Star Jedi'}} color='yellow'>
                    Planets
                </Header>
                <Table collapsing>
                    {planets.map((planet, i) => (
                        <Table.Row  key={i} >
                            <Link to={`/planets/${i}`}>
                                <Table.Cell style={{color: 'black'}}>
                                    {planet.name}
                                </Table.Cell>
                            </Link>
                        </Table.Row>
                    ))}
                </Table>
            </>
        )
}

export default PlanetList

