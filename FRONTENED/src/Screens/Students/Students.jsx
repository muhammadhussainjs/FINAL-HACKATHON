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
    const [user , setUser] = useState(null)
    const studenttoken = localStorage.getItem('studenttoken')
    console.log(studenttoken);


     
     useEffect(() => {
         const fetchAssignments = async () => {
             try {
                 
                 const apiUrl = 'https://backened-with-mongodb-final-hackathon.vercel.app'
                 console.log('api call');
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

 useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://backened-with-mongodb-final-hackathon.vercel.app/studentusers/user`, { headers: { Authorization: `Bearer ${studenttoken}`}, } );

               
                 console.log('student user:  ==> ', response.data.data);
                 setUser(response.data.data)

          
                
                
            } catch (error) {
                console.error('Error fetching users:', error.message);
               
            } 
        }
        if (studenttoken) {
            fetchUserData();
        }

        
    }, [studenttoken]);










   
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

    {user ? (    
                     <div className="card bg-base-300 w-full shadow-xl mt-5">
        <div className="card-body">
            <h2 className="card-title uppercase">NAME : {user.name}</h2>
            <h2 >EMAIL : {user.email}</h2>
            
          </div>
        </div>):(
            <p>no user found</p>
        )
      } 
   
    {loading ? (
        <div className='text-2xl flex justify-center items-center text-blue-500'>Loading assignments...</div>
    ) : (
        <>
        <div>
            <h2 className='text-center text-4xl mt-6 text-blue-500'>Assignments</h2> 
        </div>
        <div className='flex flex-col gap-6 items-center mt-12'>
            {assignments.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} date={item.createdAt} item={item} user={user}/>
            ))}
        </div>
        </>
    )}

   
    </>
);

};

export default Students;
