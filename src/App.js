import {useState} from 'react';

export default function App() {
    const [user, setUser] = useState(" ");
    const fetchUserData = () => {
        fetch(`http://localhost:8000/api`, {
            method: "GET",
        })
            .then(response => {
                return response.json()
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };
    return (
        <>
            <div className={"container"}>
                <button onClick={fetchUserData}
                        className={"btn btn-primary"}>
                    submit
                </button>
            </div>
        </>
    )
}


// import {useState} from 'react';
// import './App.css';
// import { MDBContainer} from 'mdb-react-ui-kit';
//
// function App() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('STATE => ', email , password);
//     };
//
//   return (
//     <MDBContainer className={"mt-5 text-center"}>
//         <br/><br/><br/>
//      <h1 className={"display-4"}>Learning React</h1>
//         <br/>
//         <div className={"row"}>
//             <div className={"col-md-12"}>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-outline mb-4">
//                         <input value={email}
//                                onChange={(event) => setEmail(event.target.value)}
//                                type="email"
//                                className="form-control"/>
//
//                     </div>
//
//                     <div className="form-outline mb-4">
//                         <input value={password}
//                                type="password"
//                                onChange={(event) => setPassword(event.target.value)}
//                                className="form-control"/>
//
//                     </div>
//
//                     <button type="submit" className="btn btn-primary btn-block">Sign in</button>
//                 </form>
//             </div>
//         </div>
//     </MDBContainer>
//   );
// }
//
// export default App;
