import React from 'react';
import useTittle from '../../useTittle';

const Blog = () => {
    useTittle('blog')
    return (
        <div>
            <div className='shadow-xl w-4/5 mx-auto mt-5'>
             <h1 className='text-3xl font-bold'>#Difference between SQL and NoSQL</h1>
             <h1 className='text-xl font-bold'>SQL</h1>
             <p>A SQL Database follows a table like structure which can have an 
              unlimited number of rows and every data present inside the database 
              is properly structured with Predefined Schemas, it is basically used 
              to manipulate Relational Databases Management Systems.</p>
              <br />
              <h1 className='text-xl font-bold'>NoSQL</h1>
              <p>A NoSQL Database is a Distributed Database where the data is very 
               Lunstructured with Dynamic Schema. Unlike SQL it cannot have unlimited 
               rows but it follows a Standard Schema Definition and can store all 
               sorts of data models with large distributed data in the form of 
               key-value pairs, graph databases, documents or wide-column stores.</p>
               <br />
               <br />
               <h1 className='text-3xl font-bold'>#What is JWT, and how does it work?</h1>
               <p>
               JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

               It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

               The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 

               JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
               </p>
               <h1 className='text-xl '>How it works?</h1>
               <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
              </p>
              <p>User sign-in using username and password or google/facebook.
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                 User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
               
                <h1 className='text-3xl font-bold'>#What is the difference between javascript and NodeJS?</h1>
                <h1 className='text-xl font-bold'>NodeJS: </h1>
                <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>

                <h1 className='text-xl font-bold'>JavaScript:</h1>
                <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
               
                <h1 className='text-3xl font-bold'>#How does NodeJS handle multiple requests at the same time?</h1>
                <p>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
               No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

              Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

              The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.

             NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
            NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
            So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
            The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
             If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.

              How is NodeJS better than traditional multithreaded request response model?
              With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client requ</p>
            </div>
            
        </div>
    );
};

export default Blog;