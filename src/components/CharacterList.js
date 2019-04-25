import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Table } from 'semantic-ui-react'

const CharacterList = () => {
    const [people, setPeople] = useState([])

    useEffect( () => {
      axios.get(`https://swapi.co/api/people/`)
        .then( res => {
          setPeople(res.data.results)
          })
    }, [])

    return (
        <>
            <Header width="30px" style={{fontFamily: 'Star Jedi', fontSize: '4em'}} color='yellow'>
                Characters
            </Header>
            <Table collapsing>
                    {people.map((people, i) => (
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

export default CharacterList






// import React from 'react';
// import CharacterCard from './CharacterCard.js';

// const CharacterList = ({ people }) => {
//     return(
//         <div>
//             {people.map((user,i) => {
//                 return (
//                     <CharacterCard
//                     key={i} 
//                     name={people[i].name} 
//                     height={people[i].height}
//                     mass={people[i].mass} 
//                     gender={people[i].gender} 
//                     homeworld={people[i].homeworld}
//                     />
//                 );
//             })}
//         </div>
//     );
// }

// export default CharacterList;
