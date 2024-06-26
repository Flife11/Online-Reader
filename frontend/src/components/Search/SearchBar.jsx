// src/components/SearchBar.js
import { useEffect, useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import "./SearchBar.css"

const SearchBar = ({ query, setQuery, sources, setSource, onSearch }) => {
    const [isLoading, setIsLoading] = useState(false)

    const sourceSession = localStorage.getItem('domain')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await onSearch();
        setIsLoading(false)
    };
    const handleSourceSelect = (e) => {
        const source = e.target.value
        if (source) {
            setSource(source)
            localStorage.setItem('domain', source)
        }
    }

    useEffect(() => {
        if (!sourceSession) {
            // console.log("sources[0]", sources[0])
            setSource(sources[0])
        } else {
            setSource(sourceSession)
        }
    }, [sources])

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
                <Col xs={12} md={3}>
                    <Form.Group controlId="checkInDate">
                        <Form.Control
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by story, novel name"
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={3} className="d-flex align-items-center">
                    <span className="mx-1">Source: </span>
                    <Form.Select onChange={handleSourceSelect}>
                        {sourceSession && (
                            <option value={sourceSession}>
                                {sourceSession}
                            </option>
                        )}
                        {sources.map((source, index) => {
                            if (source !== sourceSession) {
                                return (<option key={index} value={source}>
                                    {source}
                                </option>)
                            }
                        }
                        )}
                    </Form.Select>
                </Col>
                <Col xs={12} md={1} className="px-0">
                    <Button
                        type="submit"
                        className="btn-story mx-2 d-flex justify-content-center"
                        style={{ "width": "100px" }}
                    >
                        {isLoading ? (<div className="spinner"></div>) : (<span>Search</span>)}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBar;
