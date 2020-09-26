import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

function NavBar() {
    return (
        <Menu fixed='top' inverted>
            <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" style={{marginRight:10}}></img>
                    </Menu.Item>
                    <Menu.Item
                    name='Activities'
                    />
                    <Menu.Item>
                        <Button positive content='Create Activity'></Button>
                    </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
