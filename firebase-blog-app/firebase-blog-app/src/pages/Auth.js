import React,{useState} from 'react'
const initialState={
    email:"",
    password:""
}
const Auth = () => {
    const [state, setState] = useState(initialState);
    const [signUp, setSignUp] = useState(false);
    const {email,password}=state;
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    return (
        <div className="container-fluid mb-4">
            <div className="container">
                <div className="col-12 text-center">
                    <div className="text-center heading py-2">
                        {!signUp?"SignIn":"SignUp"}
                    </div>
                </div>
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <form className="row">
                            {signUp && (
                                <>
                            <div className="col-12 py-3">
                                <input type="email" className="form-control input-text-box" placeholder="Email" name="email" value={email} onChange={handleChange}/>
                            </div>
                            <div className="col-12 py-3">
                                <input type="password" className="form-control input-text-box" placeholder="Password" name="password" value={password} onChange={handleChange}/>
                            </div>
                            <div className="col-12 py-3 text-center">
                                <button className={`btn ${!signUp?"btn-sign-in":"btn-sign-up"}`} type="submit">
                                    {!signUp?"Sign-in":"Sign-up"}
                                </button>
                            </div>
                                </>
                                )}
                        </form>
                        <div>
                            {!signUp?(
                                <>
                                    <div className="text-center justify-content-center mt-2 pt-2">
                                        <p className="small fw-bold mt-2 pt-1 mb-0">
                                            Don't have an account?
                                            <span className="link-danger" style={{textDecoration:"none",cursor:"pointer",color:"#298af2",}} onClick={()=>setSignUp((true))}>
                                                Sign Up
                                            </span>
                                        </p>
                                    </div>
                                </>
                            ):(
                                <>
                                    <div className="text-center justify-content-center mt-2 pt-2">
                                        <p className="small fw-bold mt-2 pt-1 mb-0">
                                            Already have an account?
                                            <span style={{textDecoration:"none",cursor:"pointer",color:"#298af2",}} onClick={()=>setSignUp((false))}>
                                                Sign In
                                            </span>
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
