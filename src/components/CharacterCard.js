import React from 'react'
import axios from 'axios'
import { Table, Header } from 'semantic-ui-react'

export default class People extends React.Component {
    state = {
        people: {}
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
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <Header style={{fontSize: '4em'}} color='yellow' textAlign='center'>
                    {this.state.people.name}
                </Header>
                <Table inverted color='black' celled>
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
                        <Table.Cell>{this.state.people.homeworld}</Table.Cell>
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

