// src/Screens/Students/Students.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Students = () => {
    const { uniqueIdentifier } = useParams(); // Extract uniqueIdentifier from the URL
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/students/${uniqueIdentifier}`);
                setAssignments(response.data.data);
            } catch (error) {
                console.error('Error fetching assignments:', error);
                alert('Failed to load assignments.');
            } finally {
                setLoading(false);
            }
        };

        fetchAssignments();
    }, [uniqueIdentifier]);

    if (loading) {
        return <div>Loading assignments...</div>;
    }

    return (
        <div>
            <h2>Assignments</h2>
            {assignments.length > 0 ? (
                <ul>
                    {assignments.map((assignment, index) => (
                        <li key={index}>
                            <h4>{assignment.title}</h4>
                            <p>{assignment.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No assignments available at the moment.</p>
            )}
        </div>
    );
};

export default Students;
