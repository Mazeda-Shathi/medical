import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Register = () => {
    const { user, signInUsingGoogle } = UseAuth();
    return (
        <div className="mt-5 pt-5">
            <h2>Register</h2>
            <form onSubmit="">
                <input type="email" name=" " placeholder="Email"></input>
                <br />
                <input type="password" name=" " placeholder="password" className="my-3"></input>
                <br />
                <input type="password" name=" " placeholder="Re-enterd password" className="my-3"></input>
                <br />
                <input type="submit" name=" " value="submit" ></input>
                <br />
            </form>
            <p className="fw-bold fs-5 me-3">Already have an account:<Link to='/login' className="text-decoration-none ps-2  me-2 ">Log in</Link></p>
            <h4>OR</h4>
            <Button className="btn btn-info m-3 " onClick={signInUsingGoogle}>Google sign in</Button>
        </div>
    );
};

export default Register;