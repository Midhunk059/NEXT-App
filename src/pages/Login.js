
import './Login.css'

function Login() {
  return (
    <div>
      
      <div className="container">
      <h1>LOGIN</h1>
      <form action="" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required /><br/> 
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required /><br/>
        <input type="submit" value="Login" />
      </form>
   </div>
  </div>
    )
}

export default Login