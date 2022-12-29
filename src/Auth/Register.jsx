import {useRef,useState,useEffect} from "react"; /*react hocks  */
import {faCheck , faTimes ,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  MDBBtn, 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardBody, 
  MDBCardImage, 
  MDBInput, 
  MDBIcon, 
  MDBCheckbox 
} 
from 'mdb-react-ui-kit';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';
const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setValidName(USER_REGEX.test(user));
}, [user])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])

useEffect(() => {
    setErrMsg('');
}, [user, pwd, matchPwd])
    return(
        
        <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
  
                <p ref={errRef} className={errMsg ? "errmsg" :
              
              "offscreen"} aria-live="assertive">{errMsg}</p>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
           

                
                <div className="d-flex flex-row align-items-center mb-4 ">
                  
                     <MDBIcon fas icon="user me-3" size='lg'/>
                     
                  <MDBInput 
                  
                  ref={userRef} autoComplete="off" onChange={(e)=>setUser(e.target.value)} required
                  aria-describedby="uidnote"
                  aria-invalid={validName ? "false" : "true"}
                  onFocus={()=>setUserFocus(true)}
                  onBlur={()=>setUserFocus(false)}
                  
                  label='User Name' id='username' type='text' className='w-100'/>
<div>
<FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
</div>
                </div>
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                     4 to 24 characters. <br/>
                     Must begin with a letter. <br/>
                     Letters, numbers, underscores, hyphens allowed.

                  </p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' type='email'/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password'   type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}/>
                            <div style={{}}>
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                            </div>

                </div>
             
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Repeat your password'      type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}/>
                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                </div>
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
  
                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Password' />
                </div>
      
                <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
                
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
              
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
  
        <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
        />
  
    
      </MDBContainer>
    )
}
export default Register;