import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import UseFirebase from '../../hooks/UseFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = UseAuth();
    return (
        <div className="container pt-5 mt-5 login">
            <h2 className="fw-bold fs-3">Please Log in</h2>
            <form onSubmit="">
                <input type="email" name=" " placeholder="Email"></input>
                <br />
                <input type="password" name=" " placeholder="password" className="my-3"></input>
                <br />
                <input type="submit" name=" " value="submit" ></input>
                <br />
            </form>
            <p className="fw-bold fs-5 me-3">Create New Account:<Link to='/register' className="text-decoration-none ps-2  me-2 ">Register</Link></p>
            <h4>OR</h4>
            <Button className="btn btn-info m-3 " onClick={signInUsingGoogle}>Google sign in</Button>
        </div>
    );
};

export default Login;