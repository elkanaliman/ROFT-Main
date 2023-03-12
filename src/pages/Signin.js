import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';
import { logo } from '../assets'
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/amazonSlice';

const Signin = () => {
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');



  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [userEmailErr, setUserEmailErr] = useState('');
  const [userPassErr, setUserPassErr] = useState('');

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    setErrEmail('')
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
    setErrPassword('')


}

  const handleLogin =(e) =>{
    e.preventDefault()
    if (!email) {
      setErrEmail('Please Enter Your email ')
      
  }

  if (!password) {
    setErrPassword('Please input your password')
    
} if (email && password) {
  setLoading(true)
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(setUserInfo({
      _id:user.uid,
      userName: user.displayName,
      email: user.email,
      image:user.photoURL
    }))
    
    // ...
    setLoading(false)
    setSuccessMessage('Login Successful!');
    setTimeout(()=>{
      navigate('/')


    },2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode.includes('auth/invalid-email')) {
      setUserEmailErr('invalid email!')
      
    }
    if (errorCode.includes('auth/wrong-password')) {
      setUserPassErr('Wrong password!')
      
    }
    console.log('Try correct credentials!');


  });
  setEmail('');
  setPassword('')
  
}


  }
  return (
    <div className='w-full'>
      <div className='w-full bg-[#050b2e] h-screen'>
        {
          successMessage ? (
            <div>
              <motion.p
                                    initial = {{ y:10, opacity:0 }}
                                    animate = {{ y:0, opacity:1 }}
                                    transition = {{ duration:0.5 }}
                                    className ='text-base font-titleFont font-semibold text-green-700
                                    border-[1px] px-2 text-center'
                                    >
                                        {successMessage}
                                    </motion.p>
            </div>
          ):(
            <form className='w-[350px] mx-auto flex flex-col items-center'>
          <img className='w-20 h-18' src={logo} alt =' ' />
          <div className='w-full border border-[#B3E5FC] p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4 text-[#E3F2FD]'>Sign In</h2>

            <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm  font-medium  text-[#E3F2FD]'>Email or Phone</p>
              <input
              onChange={handleEmail}
              value = {email}
               className='w-full lowercase py-1 border border-[#B3E5FC] px-2 text-base rounded-sm
              outline-none focus-within:border-[#2196F3] focus-within:shadow-[#0000FF]' type= 'email'/>
                            {
                                errEmail && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {errEmail}
                                        </p>
                                )
                            }

                            {
                                userEmailErr && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {userEmailErr}
                                        </p>
                                )
                            }


            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm  font-medium  text-[#E3F2FD]'>Password</p>
              <input 
              onChange={handlePassword}
              value = {password}

              className='w-full lowercase py-1 border border-[#B3E5FC] px-2 text-base rounded-sm
              outline-none focus-within:border-[#2196F3] focus-within:shadow-[#0000FF]' type= 'password'/>

                            {
                                errPassword && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {errPassword}
                                        </p>
                                )
                            }
                            {
                                userPassErr && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {userPassErr}
                                        </p>
                                )
                            }




            </div>

            <button onClick={handleLogin} className='w-full py-1.5 text-sm font-normal 
            rounded-sm bg-[#1c0d70]
            from-[#64B5F6] to-[#7986CB] hover:bg-[#26C6DA] border border-[#0D47A1]
            active:shadow-[#B2EBF2] text-[#e9f4fa] '> Continue</button>

                        {
                            loading && (
                                <div className='flex justify-center '>
                                    <InfinitySpin 
                                      width='200'
                                      color="#0288D1"
                                    />
                                </div>
                            )
                        }
            

              <p className='text-xs text-[#E1F5FE] leading-4 mt-4'>
                  By Continuing you agree to ROFT's:
                  <span className='text-[#64B5F6] cursor-pointer' >
                  {" "} Terms,Conditions of Use
                  </span> <span>and{" "}</span>
             
                   <span className='text-[#64B5F6] cursor-pointer'>
                     Privacy Policy. 
                   </span>
              </p>
              <p className='text-xs text-[#d5e1eb] mt-4 cursor-pointer group '>
                  <ArrowRightIcon /> 
                  <span className='group-hover:text-[#FFAB91] group-hover:underline'>
                     Need Help?
                  </span>
              </p>


             </div>
             

          </div>

          <p className='w-full text-xs text-[#E3F2FD] mt-4 flex items-center'>
              <span className='w-1/3 h-[1px] bg-[#1A237E] inline-flex'></span>
              <span className='w-1/3 text-center '>New to ROFT?</span>
              <span className='w-1/3 h-[1px] bg-[#1A237E] inline-flex'></span>
          </p>

          
             <Link to="/registration">

             <button  className='w-full py-1.5 mt-4 text-sm 
             font-bold rounded-sm bg-gradient-to-t
             from-[#B3E5FC] to-[#4FC3F7] text-[#000066] hover:bg-gradient-to-b border-[#99FFFF] 
             '> 
               Create your ROFT Account
             </button>
             </Link>
         

          
          
          

          



        </form>
          )
        }
      </div>

      <div className='w-full bg-[#23137e] from-[#99FFFF] to-[#D1C4E9] h-20
      flex flex-col gap-4 justify-center items-center py-10'>
      <div className='flex items-center gap-6' >
        <p className='text-xs text-[#FAFAFA] hover:text-[#4DB6AC] hover:underline
        duration-100 cursor-pointer'>Conditions of use</p>
        <p className='text-xs text-[#FAFAFA] hover:text-[#4DB6AC] hover:underline
        duration-100 cursor-pointer'>Terms</p>
        <p className='text-xs text-[#FAFAFA] hover:text-[#4DB6AC] hover:underline
        duration-100 cursor-pointer'>Privacy Policy</p>


      </div>
      <p className='text-[#FAFAFA] cursor-default'>&#169; 2023 ROFT,Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Signin