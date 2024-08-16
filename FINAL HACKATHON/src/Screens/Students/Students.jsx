// src/Screens/Students/Students.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';

const Students = () => {
    const { uniqueIdentifier } = useParams(); // Extract uniqueIdentifier from the URL
    console.log('uniqueIdentifier ==> ' , uniqueIdentifier);
    
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get(`https://backened-with-mongodb-final-hackathon.vercel.app/assignments/student/${uniqueIdentifier}`);

                console.log(response.data);
                
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

    function gotoNext(item){
        console.log(item);
        console.log('item');
    }

    useEffect(()=>{
        console.log(assignments);
        

    },[assignments])
    if (loading) {
        return <div>Loading assignments...</div>;
    }

    return (
        <>
        <div>
            <h2 className=' text-center text-4xl mt-6 text-blue-500'>Assignments</h2> 
                </div>
            <div className=' flex flex-col gap-6 items-center mt-12'>
       { assignments.map((item , index)=>{
           return <Card key={index} title={item.title} description={item.description}
           date={item.createdAt} item={item}/>
           
        })}
        </div> 
        </>
    );
};

export default Students;
