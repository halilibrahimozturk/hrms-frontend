import React , {useState} from 'react'
import Languages from "./Languages"
import { Button, Container, Menu } from 'semantic-ui-react'
import {  Image } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut(params){

        setIsAuthenticated(false)

    }

    function handleSignIn(params){

        setIsAuthenticated(true)

    }


    return (
        <div>
            <Menu fixed>
                <Container>

                    <Menu.Item>


                        <Image src='https://aday-asset.mncdn.com/img/kariyernet_new_logo.png' size='small' />



                    </Menu.Item>



                    <Menu.Item
                        name='Jobs'




                    // active={activeItem === 'İş ara'}
                    // onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Jobtitles Guide'
                    // active={activeItem === 'messages'}
                    // onClick={this.handleItemClick}
                    />

                    <Menu.Menu position='right'>

                        {/* <Menu.Item>
                            Başvurulan İşler
                        </Menu.Item> */}

                        <Languages>

                        </Languages>


                     


                        <Menu.Item>

                            <div>
                                <Button color='green'>Post Jobs</Button>


                            </div>

                        </Menu.Item>






                        <Menu.Item>

                        {isAuthenticated?<SignedIn signOut = {handleSignOut}/>:<SignedOut signIn = {handleSignIn}/> }


                        </Menu.Item>





                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
