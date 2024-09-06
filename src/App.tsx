import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ color: "black" }}>
                UD CISC275 with React Hooks and TypeScript and RYAN JOSEPH
                BURTSON
            </header>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Additionally, Hello
                            World...
                        </p>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div></div>
                        <h1>Hi :3</h1>
                        <img
                            src="src\Images\smiggie.jpg"
                            alt="A picture of Biggie Smalls"
                        />
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "100px",
                                width: "500px",
                                margin: "auto",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>Things I like:</p>
                        <p>
                            <ol id="OrderedList">
                                <li>Black Cats</li>
                                <li>Orange Cats</li>
                                <li>Tuxedo Cats</li>
                                <li>Not Much Else</li>
                            </ol>
                        </p>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "100px",
                                width: "500px",
                                margin: "auto",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
