import React from 'react'
import {
    Jumbotron,
    Container
  } from 'reactstrap';
const JumbotronComponent = () => {
    return (
        <div>
            <Jumbotron className="jumbotronTheme">
                <Container>
                    <p className="lead">You don't have account yet, please create a new account</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default JumbotronComponent;
