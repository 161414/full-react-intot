
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
 function Signup() {
  let navigate = useNavigate()
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/Signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

    const data = await response.json()

		if (data.status === 'ok') {
			navigate("/login")
		}
    else {
      alert('This email already in use. Use a different email !!')
    }
	}

    
  return (
    <React.Fragment>
    <section className='sec-sign'>
    <div className='main'>
        <form classname="mx-1 mx-md-4"  style={{border:"1px solid #ccc"}} onSubmit={registerUser}>
        <div className="signform">
    <div className="container">
      <h1>Sign Up</h1>
      <hr/>
      <label for="name"><b>Name</b></label>
      <input required type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
      <label for="email"><b>Email</b></label>
      <input required type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label for="password"><b>Password</b></label>
      <input required type="password" name="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)}/>
      
      <div className="clearfix mx-4 mb-3 mb-lg-4">
                          <br/>
                          <button type="submit" className="btn btn-outline-light btn-lg">Register</button>
                        </div>
    </div>
    <div className="signup-image">
                        <figure><img src="assets/images/signup-image.jpg" alt=""/></figure>
                    </div>
    </div>
  </form>
  </div>
   </section>
   </React.Fragment>
   )
 }
 export default Signup;
 
