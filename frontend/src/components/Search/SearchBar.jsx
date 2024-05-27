// src/components/SearchBar.js
import React, { useEffect } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const SearchBar = ({ query, setQuery, sources, setSource, onSearch }) => {

    const sourceSession = localStorage.getItem('domain')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };
    const handleSourceSelect = (e) => {
        const source = e.target.value
        if (source) {
            localStorage.setItem('domain', source)
            setSource(source)
        }
    }

    useEffect(() => {
        if (!sourceSession) {
            setSource(sources[0])
        }
    }, [sourceSession])

    return (
        <Form onSubmit={handleSubmit}>

            <Row className="justify-content-center">
                <Col xs={12} md={3}>
                    <Form.Group controlId="checkInDate">
                        <Form.Control
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by name, author, chapter..."
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={3}>
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
                <Col xs={12} md={3}>
                    <Button type="submit" className="btn-story mx-2">View</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBar;