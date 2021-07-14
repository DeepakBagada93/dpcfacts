import React from 'react'
import {Link} from 'react-router-dom'
import youtube from '../Images/youtube.png'
import whatapp from '../Images/whatsapp.png'
import instagram from '../Images/instagram.png'

const About = () => {
    return (
        <div className='container mx-auto mt-4'>
           <div className='mt-4 '>
           <img
           className='border-2 rounded-xl '
           src='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
           alt=''
           />
           <p className='text-xl'>
           સુખ વ્યક્તિલક્ષી છે. જ્યારે અન્ય લોકો કહે છે કે સફળતા, સંપત્તિ અને
            સુંદરતા સુખ ખરેખર શું છે તે નિર્ધારિત કરતી નથી, કેટલાક લોકો માટે, તે
            બધું છે જે તેઓને જોઈએ છે. તેથી, તમે ખરેખર સુખી કરી શકતા નથી કે
            જેનાથી લોકો ખુશ થાય છે. જો તે આનંદની ક્ષણિક ભાવના નહીં પણ આનંદ અને
            સંતોષનો કાયમી સ્રોત છે, તો તે તમારા સાચા આનંદ હોઈ શકે.
           </p>
            </div>  
            <div>
            <div >
                    <ul className='flex flex-row justify-center'>
                        <li className='px-3'><Link><img className='w-10' alt='' src={youtube}/></Link></li>
                        <li className='px-3'><Link><img className='w-10 ' alt=''src={whatapp}/></Link></li>
                        <li className='px-3'><Link><img className='w-10' alt='' src={instagram}/></Link></li>
                     </ul>            
                </div>
            </div>
        </div>
    )
}

export default About
