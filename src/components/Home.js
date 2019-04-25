import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Button } from 'semantic-ui-react'

export default class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Header textAlign='center' style={{ fontFamily: 'Star Jedi', fontSize: '55px', position: 'absolute', left: '37%', top: '20%' }} color='yellow'>
                    STAR WARS API
                </Header>
                <Link to='/CharacterList'>
                    <Button size='large' style={{position: 'absolute', left: '42%', top: '40%'}} inverted color='yellow'>
                        Characters
                    </Button>
                </Link>
                <Link to='/PlanetList'>
                    <Button size='large' style={{position: 'absolute', left: '56%', top: '40%'}} inverted color='yellow'>
                        Planets
                    </Button>
                </Link>
            </Container>
        )
    }
}
