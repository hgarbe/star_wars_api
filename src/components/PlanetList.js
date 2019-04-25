import React, {useState, useEffect} from 'react'
import { Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlanetList = () => {
    const [planets, setPlanets] = useState([])

    useEffect( () => {
        let planetURL = 'https://swapi.co/api/planets'
        axios 
            .get(planetURL)
            .then(res => 
                setPlanets(res.data.results))
    })
 
        return (
            <>
                <Header width="30px" style={{fontSize: '4em'}} color='yellow'>
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

