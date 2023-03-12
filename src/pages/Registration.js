import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';
import { logo } from '../assets'
import { InfinitySpin } from 'react-loader-spinner';


const Registration = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    // Error start

    const [errClientName, setErrClientName] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errCPassword, setErrCPassword] = useState('');
    const [firebaseErr, setFirebaseErr] = useState('');

    // Loading Function start
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');



    // Handle Function start

    const handleName = (e) =>{
        setClientName(e.target.value)
        setErrClientName('')


    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
        setErrEmail('')


    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
        setErrPassword('')


    }

    const handleCPassword = (e) =>{
        setCPassword(e.target.value)
        setErrCPassword('')


    }

    // Emailvalidation

    const emailValidation = (email) =>{
        return String(email).toLowerCase().match(
            /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        );
    }


    // Submit Function start



    const handleRegistration = (e) =>{
        e.preventDefault()
        if (!clientName) {
            setErrClientName('Enter Your Name')
            
        }

        if (!email) {
            setErrEmail('Please Enter Your email ')
            setFirebaseErr('')
            
        }else{
            if (!emailValidation(email)) {
                setErrEmail('Enter a valid Email')
                
            }
        }

        if (!password) {
            setErrPassword('Please input your password')
            
        }else{
            if (password.length < 6) {
                setErrPassword('Your Password is weak')
                
            }
        }

        if (!cPassword) {
            setErrCPassword('Please confirm your password')

            
        }else{
            if (cPassword !== password ) {
                setErrCPassword('Paswords do not match')

                
            }
        }

        if (clientName && email && emailValidation(email) && password && password.length >=6 
        && cPassword && cPassword ===  password) {

            setLoading(true)

            createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: clientName,
                
                })
                 // Signed in 
                 const user = userCredential.user;
                 setLoading(false)
                 setSuccessMessage('Account created successfully!');
                 setTimeout(()=>{
                    navigate('/signin')
                 },3000)
                 // ...
               })
             .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               if (errorCode.includes('auth/email-already-in-use')) {
                setFirebaseErr('Email already in use!')
                
               }
               // ..
             });



             setClientName('')
             setEmail('')
             setPassword('')
             setCPassword('')
             setErrCPassword('')
             setFirebaseErr('')

            
        }


        

    }
  return <div className='w-full'>
        <div className='w-full bg-[#050b2e] pb-10'>
            <form className='w-[370px] mx-auto flex flex-col items-center'>
                <img className='w-12' src={logo} alt = 'logo' />
                <div className='w-full border border-[#050b2e]'>
                    <h2 className='font-titleFont text-3xl font-medium mb-4 text-[#E0F7FA]'>
                        Create Account
                    </h2>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p  className='text-sm font-medium text-[#E0F7FA]'>Name</p>
                            <input onChange={handleName}
                             value ={clientName}
                             className='w-full  py-1 border border-[#B3E5FC] px-2
                             text-base rounded-sm
                            outline-none focus-within:border-[#2196F3] focus-within:shadow-[#0000FF]' type= 'text' />
                            {
                                errClientName && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {errClientName}
                                        </p>
                                )
                            }
                        </div>

                        <div className='flex flex-col gap-2'>

                           <p className='text-sm font-medium text-[#E0F7FA]'>Email or Phone</p>
                            < input 
                            
                                onChange={handleEmail} 
                                value ={email}
                                className='w-full lowercase py-1 border border-[#B3E5FC] px-2
                             text-base rounded-sm
                            outline-none focus-within:border-[#2196F3] focus-within:shadow-[#0000FF]' type= 'email' />

                            {
                                firebaseErr && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {firebaseErr}
                                        </p>
                                )
                            }

                        </div>

                        <div className='flex flex-col gap-2'>

                           <p className='text-sm font-medium text-[#E0F7FA]'>Password</p>
                            <input onChange={handlePassword}
                            value = {password} 
                            
                            className='w-full  py-1 border border-[#B3E5FC] px-2
                             text-base rounded-sm
                            outline-none focus-within:border-[#2196F3] focus-within:shadow-[#0000FF]'
                             type= 'password' />

                            {
                                errPassword && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {errPassword}
                                        </p>
                                )
                            }



                        </div>

                        <div className='flex flex-col gap-2'>

                           <p className='text-sm font-medium text-[#E0F7FA]'>Confirm Password</p>
                            <input onChange={handleCPassword} 
                            value ={cPassword}
                            className='w-full lowercase py-1 border border-[#B3E5FC] px-2
                             text-base rounded-sm
                            outline-none focus-within:border-[#2196F3] focus-within:shadow-[#0000FF]'
                             type= 'password' />

{
                                errCPassword && (
                                    <p className='text-red-700 text-xs font-semibold tracking-wide
                                    flex items-center gap-2 -mt-1.5'>
                                        <span className='italic text-red-700'>!</span> {errCPassword}
                                        </p>
                                )
                            }

                             

                        </div>


                        <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal 
                            rounded-sm bg-[#1c0d70]
                          from-[#64B5F6] to-[#7986CB] hover:bg-[#26C6DA] border border-[#0D47A1]
                           active:shadow-[#B2EBF2] text-[#e9f4fa] '> Continue
                        </button>
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
                        {
                            successMessage && (
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
                            )
                        }




                    </div>
                    <p className='text-xs text-[#E1F5FE] leading-4 mt-4'>
                      By clicking Continue,you agree to ROFT's:
                      <span className='text-[#64B5F6] cursor-pointer' >
                      {" "} Terms,Conditions of Use
                        </span> <span>and{" "}</span>
             
                       <span className='text-[#64B5F6] cursor-pointer'>
                          Privacy Policy. 
                       </span>
                    </p>
                    <div>
                        <p className='text-xs text-[#FFFFFF]'>Already have an account?
                            <Link to = '/signin'>
                               <span className='text-xs text-[#ec538e] hover:text-[#3ec9ec] 
                                  cursor-pointer hover:underline'>
                                   Signin
                                   <ArrowRightIcon />
                               </span>
                            </Link> 
                            </p>
                            <p className='text-xs text-[#FFFFFF]'>Looking for gaming accounts?
                                <span className='text-xs text-[#ec538e] hover:text-[#3ec9ec] 
                               cursor-pointer hover:underline'>{" "}Create a free ROFT Gaming Account</span>
                            </p>
                    </div>
                </div>

            </form>
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
  
}

export default Registration