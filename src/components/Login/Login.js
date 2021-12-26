import React, { useState } from 'react';
import { Alert, Button, Col, Container, NavLink, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const Login = () => {
    const [loginFromData ,  setLoginFromData] = useState({})
    const {user, loginUser, isLoading, authError,singInGoolge} = useAuth()

    const location = useLocation()
    // const history =  useHistory()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field , value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)
    }

    const handleOnSubmit = e => {
        loginUser(loginFromData.email, loginFromData.password , location)
        e.preventDefault()
    }
    const handleGoogleSingin = () =>{
      singInGoolge(location, )
    }
    return (
        <Container>
            <Row>
                <Col >
                <form onSubmit={handleOnSubmit} style={{marginTop:'150px'}}>
          <h2>Login</h2>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input
        type="email"
        class="form-control"
        id="inputEmail3"
        onBlur={handleOnChange}
        name="email"
         />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input
        type="password"
        class="form-control"
        id="inputPassword3"
        name="password"
        onBlur={handleOnChange}
        />
    </div>
  </div>
  
  
  <button type="submit" class="btn btn-primary">Sign in</button>
  <br /><br />
  <NavLink as={Link} to="/register">
      <Button >please register</Button>

  </NavLink>
  {isLoading &&   <Spinner animation="grow" variant="info" />
}
{user?.email && [
  'success',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    User Created {variant} 
  </Alert>
))}
{authError && [
 
  'danger',
  
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    {authError}
    opp! {variant} 
  </Alert>
))}
</form>
<p>------------------</p>
<Button onClick={handleGoogleSingin} >Google sing in</Button>

                
                </Col>
            </Row>
        </Container>
    );
};

export default Login;