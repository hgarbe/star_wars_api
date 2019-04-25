import React from 'react'
import axios from 'axios'
import { Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class People extends React.Component {
    state = {
        people: {},
        // planet: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params
        let intId = parseInt(id)
        let newId = intId + 2
        axios
            .get(`https://swapi.co/api/people/${newId}`)
            .then(res => {
                this.setState({ people: res.data })
            })
            // .get(`https://swapi.co/api/planet/${newId}`)
            // .then(res => {
            //     this.setState({ people: res.data })
            // })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <Header style={{fontFamily: 'Star Jedi', fontSize: '4em'}} color='yellow'>
                    {this.state.people.name}
                </Header>
                <Table celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>HomeWorld</Table.HeaderCell>
                        <Table.HeaderCell>Mass</Table.HeaderCell>
                        <Table.HeaderCell>Height</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>BirthYear</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.state.people.name}</Table.Cell>
                        <Link to={`/planets/planet{id`}>
                        <Table.Cell>{this.state.people.homeworld}</Table.Cell>
                        </Link>
                        <Table.Cell>{this.state.people.mass}</Table.Cell>
                        <Table.Cell>{this.state.people.height}</Table.Cell>
                        <Table.Cell>{this.state.people.gender}</Table.Cell>
                        <Table.Cell>{this.state.people.birth_year}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
            </>
        )
    }
}

