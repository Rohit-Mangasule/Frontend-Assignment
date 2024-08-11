import React, { useState , useEffect  } from 'react';
import './App.css';
import axios from 'axios';

interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
}

const App: React.FC = () => {
    const [selectedCustomer, setSelectedCustomer] = useState<Customer>(
    {
        id: 1,
        name: 'John Doe',
        title: 'Software Engineer',
        address: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    );

    const customers: Customer[] = [
    { id: 1, name: "John Doe", title: "Software Engineer", address: "123 Main St, Springfield" },
    { id: 2, name: "Jane Smith", title: "Project Manager", address: "456 Oak St, Metropolis" },
    { id: 3, name: "Emily Johnson", title: "UX Designer", address: "789 Pine St, Gotham" },
    { id: 4, name: "Michael Brown", title: "DevOps Engineer", address: "101 Elm St, Star City" },
    { id: 5, name: "Sarah Davis", title: "QA Tester", address: "202 Birch St, Central City" },
    { id: 6, name: "James Wilson", title: "Product Manager", address: "303 Cedar St, Coast City" },
    { id: 7, name: "Jessica Lee", title: "Backend Developer", address: "404 Maple St, Blüdhaven" },
    { id: 8, name: "David Miller", title: "Frontend Developer", address: "505 Ash St, Keystone City" },
    { id: 9, name: "Olivia Martin", title: "Database Administrator", address: "606 Cherry St, Smallville" },
    { id: 10, name: "Daniel Anderson", title: "Data Scientist", address: "707 Walnut St, Midway City" },
    { id: 11, name: "Sophia Thomas", title: "System Analyst", address: "808 Willow St, Opal City" },
    { id: 12, name: "Lucas Garcia", title: "Network Engineer", address: "909 Magnolia St, Gateway City" },
    { id: 13, name: "Charlotte Martinez", title: "Mobile Developer", address: "1010 Cypress St, Hub City" },
    { id: 14, name: "Ethan Rodriguez", title: "Cloud Architect", address: "1111 Redwood St, National City" },
    { id: 15, name: "Amelia Hernandez", title: "Scrum Master", address: "1212 Palm St, Fawcett City" },
    { id: 16, name: "Benjamin Lopez", title: "Security Specialist", address: "1313 Spruce St, Central City" },
    { id: 17, name: "Mia Gonzalez", title: "Web Developer", address: "1414 Poplar St, Coast City" },
    { id: 18, name: "William Perez", title: "SEO Specialist", address: "1515 Aspen St, Blüdhaven" },
    { id: 19, name: "Harper Wilson", title: "Content Strategist", address: "1616 Fir St, Keystone City" },
    { id: 20, name: "Elijah Davis", title: "UI Designer", address: "1717 Hickory St, Star City" },



    // customer details are limited to 20 for public API limited access for photos


    // { id: 21, name: "Abigail Young", title: "IT Support", address: "1818 Pine St, Gotham" },
    // { id: 22, name: "Mason King", title: "Technical Writer", address: "1919 Birch St, Metropolis" },
    // { id: 23, name: "Evelyn Scott", title: "Blockchain Developer", address: "2020 Maple St, Smallville" },
    // { id: 24, name: "Logan Green", title: "Game Developer", address: "2121 Cedar St, Midway City" },
    // { id: 25, name: "Victoria Adams", title: "AI Specialist", address: "2222 Elm St, Star City" },
    // { id: 26, name: "Liam Baker", title: "Full Stack Developer", address: "2323 Oak St, Metropolis" },
    // { id: 27, name: "Isabella Gonzalez", title: "DevOps Specialist", address: "2424 Pine St, Gotham" },
    // { id: 28, name: "Sebastian Carter", title: "Technical Lead", address: "2525 Birch St, Central City" },
    // { id: 29, name: "Madison Reed", title: "Data Analyst", address: "2626 Maple St, Blüdhaven" },
    // { id: 30, name: "Aiden Edwards", title: "Network Administrator", address: "2727 Cedar St, Coast City" },
    // { id: 31, name: "Layla Murphy", title: "Software Architect", address: "2828 Elm St, Star City" },
    // { id: 32, name: "Oliver Rivera", title: "Cybersecurity Analyst", address: "2929 Oak St, Gotham" },
    // { id: 33, name: "Chloe Sanchez", title: "Cloud Engineer", address: "3030 Pine St, Metropolis" },
    // { id: 34, name: "Lucas Howard", title: "Frontend Developer", address: "3131 Birch St, Central City" },
    // { id: 35, name: "Sofia Patterson", title: "Business Analyst", address: "3232 Maple St, Blüdhaven" },
    // { id: 36, name: "Henry Ramirez", title: "Systems Engineer", address: "3333 Cedar St, Coast City" },
    // { id: 37, name: "Grace Cox", title: "Mobile App Developer", address: "3434 Elm St, Star City" },
    // { id: 38, name: "Alexander Ward", title: "Data Engineer", address: "3535 Oak St, Metropolis" },
    // { id: 39, name: "Lily Bailey", title: "Web Designer", address: "3636 Pine St, Gotham" },
    // { id: 40, name: "Samuel Cooper", title: "Cloud Consultant", address: "3737 Birch St, Central City" },
    // { id: 41, name: "Avery Rivera", title: "Database Manager", address: "3838 Maple St, Blüdhaven" },
    // { id: 42, name: "Mila Barnes", title: "Infrastructure Engineer", address: "3939 Cedar St, Coast City" },
    // { id: 43, name: "Jack Bennett", title: "IT Consultant", address: "4040 Elm St, Star City" },
    // { id: 44, name: "Ella Foster", title: "Solution Architect", address: "4141 Oak St, Metropolis" },
    // { id: 45, name: "Daniel Watson", title: "Software Tester", address: "4242 Pine St, Gotham" },
    // { id: 46, name: "Scarlett Brooks", title: "UX Researcher", address: "4343 Birch St, Central City" },
    // { id: 47, name: "Matthew Hayes", title: "Machine Learning Engineer", address: "4444 Maple St, Blüdhaven" },
    // { id: 48, name: "Aubrey Perry", title: "Security Engineer", address: "4545 Cedar St, Coast City" },
    // { id: 49, name: "Jacob Bell", title: "IT Manager", address: "4646 Elm St, Star City" },
    // { id: 50, name: "Zoe Kelly", title: "Data Consultant", address: "4747 Oak St, Metropolis" },
    // { id: 51, name: "Ryan Bennett", title: "Software Developer", address: "4848 Pine St, Gotham" },
    // { id: 52, name: "Penelope Wood", title: "Cloud Specialist", address: "4949 Birch St, Central City" },
    // { id: 53, name: "Carter Russell", title: "Tech Support Engineer", address: "5050 Maple St, Blüdhaven" },
    // { id: 54, name: "Grace Cook", title: "IT Analyst", address: "5151 Cedar St, Coast City" },
    // { id: 55, name: "Landon Howard", title: "Network Specialist", address: "5252 Elm St, Star City" },
    // { id: 56, name: "Aria Hughes", title: "Software Consultant", address: "5353 Oak St, Metropolis" },
    // { id: 57, name: "David Ward", title: "Digital Strategist", address: "5454 Pine St, Gotham" },
    // { id: 58, name: "Madeline Morgan", title: "Systems Architect", address: "5555 Birch St, Central City" },
    // { id: 59, name: "Ethan Myers", title: "Enterprise Architect", address: "5656 Maple St, Blüdhaven" },
    // { id: 60, name: "Luna Reed", title: "Business Intelligence Analyst", address: "5757 Cedar St, Coast City" },
    
    ];





    const [photos, setPhotos] = useState<string[]>([]);

    const handleCustomerClick = async (customer: Customer) => {
        setSelectedCustomer(customer);
        await fetchPhotos();
    };
    






    const fetchPhotos = async () =>  {
    const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const response = await axios.get('https://api.unsplash.com/photos/random/', {
        
    params: {
         // fetch 9 random photos
        client_id: UNSPLASH_ACCESS_KEY,
        count: 9 
    },
        
        
    });
    const urls = response.data.map((photo: any) => photo.urls.small);
    
    setPhotos(urls);
};



useEffect(() => {
    if (selectedCustomer) {
        fetchPhotos();
        const intervalId = setInterval(() => {
            fetchPhotos();
        }, 10000); 

        
        return () => clearInterval(intervalId);
    }
}, [selectedCustomer]);


    return (
    <div className="container">
        <header className="header">
            <h1>Customer Details</h1>
        </header>
        <div className="content">
            <div className="customer-list">
                {customers.map((customer, index) => (
                    <div 
                        key={index} 
                        className="customer-item"
                        onClick={() => handleCustomerClick(customer)}
                        >
                        <h2>{customer.name}</h2>
                        <p className="title">{customer.title}</p>
                        </div>
                ))}
            </div>
            <div className="customer-details">
                    {selectedCustomer ? (
                        <>
                            <h2>{`${selectedCustomer.name} - ${selectedCustomer.title}`}</h2>
                            <p>{selectedCustomer.address}</p>
                            <div className="image-grid">
                                {photos.length > 0 ? (
                                    photos.map((photo, index) => (
                                        <div key={index} className="image-item">
                                            <img src={photo} alt={`Customer ${index + 1}`} />
                                        </div>
                                    ))
                                ) : (
                                    <p>Loading photos...</p>
                                )}
                            </div>
                        </>
                    ) : (
                        <p>Please select a customer to view details.</p>
                    )}
                </div>
        </div>
        
    </div>
);
};

export default App;
