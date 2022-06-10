import React, {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = "/Dashboard"
		} else {
			alert('Please check your username and password')
		}
	}
  return (
    <div>
        <React.Fragment>

            
            <div class="box">
                    <h3>Login</h3>
                     <form class="form-class" onSubmit={loginUser}>
                         <div class="login-form">
                             <label for="email">Email</label>
                             <input type="email" id="username" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label for="password">Password</label>
                             <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div>
                        <button type="submit" class="btn btn-success">LOG IN</button>
                 </form>
             </div>
            

        </React.Fragment>

    </div>
  )
}

export default Login;

  

