import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Navbar1 from '../../Components/Navbar1/Navbar1';

const Students = () => {
    const { uniqueIdentifier } = useParams(); 

    console.log('uniqueIdentifier ==> ' , uniqueIdentifier);
    
    const [assignments, setAssignments] = useState([]);
    const [assignmentsed, setAssignmentsed] = useState([]);
     const [loading, setLoading] = useState(true);

     
     useEffect(() => {
         const fetchAssignments = async () => {
             try {
                 
                 console.log('api call');
                 const apiUrl = 'https://backened-with-mongodb-final-hackathon.vercel.app'
                 console.log('Fetching assignments from:', `${apiUrl}/assignments/students/${uniqueIdentifier}`);
                 const response = await axios.get(`${apiUrl}/assignments/students/${uniqueIdentifier}`);
                 
                 console.log('Full response:', response);
                 console.log('Assignments data:', response.data.data);
            console.table(response.data.data); // For a tabular view
            console.log('Users data:', response.data.user);
            console.log('Response Data:', JSON.stringify(response.data, null, 2));
                 setAssignments(response.data.data);
                 setAssignmentsed(response.data.user);


                

                } catch (error) {
                    console.error('Error fetching assignments:', error);
                    alert('Failed to load assignments.');
                } finally {
                    setLoading(false);
                }    
            };    
            
            fetchAssignments();
        }, [uniqueIdentifier]);    
        
        
// fetch studentusers    











    function gotoNext(item){
        console.log(item);
        console.log('item');
    }

    useEffect(()=>{
        console.log(assignments);
        

    },[assignments])
    useEffect(()=>{
        console.log(assignmentsed);
        

    },[assignmentsed])
    if (loading) {
        return <div>Loading assignments...</div>;
    }

   return (
    <>
    <Navbar1 showadmin = {false} showstudents = {false} />
   
    {loading ? (
        <div>Loading assignments...</div>
    ) : (
        <>
        <div>
            <h2 className='text-center text-4xl mt-6 text-blue-500'>Assignments</h2> 
        </div>
        <div className='flex flex-col gap-6 items-center mt-12'>
            {assignments.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} date={item.createdAt} item={item}/>
            ))}
        </div>
        </>
    )}

   
    </>
);

};

export default Students;
