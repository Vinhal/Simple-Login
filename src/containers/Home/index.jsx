import React from 'react'
import { Main, Container, ActivityBar } from './style'
import Auth from './Auth'

const Home = () => (
    <Main>
        <Container>
            <ActivityBar />
            <Auth />
        </Container>
    </Main>
)

export default Home
