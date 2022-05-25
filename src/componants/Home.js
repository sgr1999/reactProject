import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button, Container } from "reactstrap";

const Home = ()=>{

    return(
        <Jumbotron className="text-center bg-primary">
            <h1>Programming Languages</h1>
       
        <Container>
            <Button color="primary">Start Using</Button>
        </Container>
        </Jumbotron>

    );
}

export default Home;