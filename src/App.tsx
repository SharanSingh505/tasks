import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
//import Container from "react-bootstrap/esm/Container";
import "./App.css";
cd
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <img src={require("./Steph.jpg")} alt="A picture of Steph Curry" />
            <h1>This is header text</h1>
            <ul>
                <li>first element </li>
                <li>second element</li>
                <li>third element</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <p>Author: Sharanjit Singh</p>
            <Container>
                <Row>
                    <Col>First Column.</Col>
                    <div className="redrectangle"></div>
                    <Col>Second Column.</Col>
                    <div className="redrectangle"></div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
