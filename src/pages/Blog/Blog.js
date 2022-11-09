import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-12'>
            <div>
                <h2 className='text-2xl font-bold'>1. Difference between SQL and NoSQL</h2>
                <p>SQL databases are primarily called as Relational Databases whereas NoSQL database are primarily called as non-relational or distributed database
                    SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </p>
            </div>
            <div>
                <h2 className='text-2xl font-bold mt-4'>2. What is JWT, and how does it work?</h2>
                <p>A JSON web tokenis JSON Object which is used to securely transfer information over the webbetween two parties. It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots. JWT defines the structure of information we are sending from one party to the another, and it comes in two forms Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.A header in a JWT is mostly used to describe the cryptographic operations applied to the JWT like signing/decryption technique used on it. It can also contain the data about the media/content type of the information we are sending</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold mt-4'>3. What is the difference between javascript and NodeJS?</h2>
                <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascrip
                </p>
            </div>
            <div>
                <h2 className='text-2xl font-bold mt-4'>4. How does NodeJS handle multiple requests at the same time?</h2>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly.</p>
            </div>
        </div>
    );
};

export default Blog;