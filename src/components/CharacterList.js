import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Table } from 'semantic-ui-react'

// const CharacterList = () => {
//     const [people, setPeople] = useState([])

//     useEffect( () => {
//       axios.get(`https://swapi.co/api/people/`)
//         .then( res => {
//             debugger
//           setPeople(res.data.results)
//           console.log(res.data.results)
//           })
//     }, [])

    class CharacterList extends React.Component {
        state = {people: []}
      
        componentDidMount() {
          axios.get(`https://swapi.co/api/people/`).then(res => {
            this.setState({people: res.data.results})
        })
        }

        render () {
            return (
            <>
                <Header width="30px" style={{fontFamily: 'Star Jedi', fontSize: '4em'}} color='yellow'>
                    Characters
                </Header>
                <Table collapsing>
                        {this.state.people.map((people, i) => (
                            <Table.Row  key={i} >
                                <Link to={`/people/${i}`}>
                                    <Table.Cell style={{color: 'black'}}>
                                        {people.name}
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        ))}
                </Table>
            </>
            )
        }
}

export default CharacterList