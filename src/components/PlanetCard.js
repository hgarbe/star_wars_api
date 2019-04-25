import React from 'react'
import axios from 'axios'
import { Table, Header } from 'semantic-ui-react'

export default class Planet extends React.Component {
    state = {
        planet: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params
        let intId = parseInt(id)
        let newId = intId + 2
        axios
            .get(`https://swapi.co/api/planets/${newId}`)
            .then(res => {
                this.setState({ planet: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <Header width="30px" style={{fontFamily: 'Star Jedi', fontSize: '4em'}} color='yellow'>
                    {this.state.planet.name}
                </Header>
                <Table celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Climate</Table.HeaderCell>
                        <Table.HeaderCell>Gravity</Table.HeaderCell>
                        <Table.HeaderCell>Diameter</Table.HeaderCell>
                        <Table.HeaderCell>Rotation Period</Table.HeaderCell>
                        <Table.HeaderCell>Population</Table.HeaderCell>
                        <Table.HeaderCell>Terrain</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.state.planet.climate}</Table.Cell>
                        <Table.Cell>{this.state.planet.gravity}</Table.Cell>
                        <Table.Cell>{this.state.planet.diameter}</Table.Cell>
                        <Table.Cell>{this.state.planet.rotation_period}</Table.Cell>
                        <Table.Cell>{this.state.planet.population}</Table.Cell>
                        <Table.Cell>{this.state.planet.terrain}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
            </>
        )
    }
}
