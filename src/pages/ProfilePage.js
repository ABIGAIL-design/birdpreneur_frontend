import React, { useState, useContext, useEffect } from 'react';
// import AccountSidebar from '../components/AccountSidebar';
import { mainFunctions } from "../providers/MainProviders";
import PageTitle from '../components/PageTitle'
import SectionHeader from '../components/SectionHeader'
import {doc, updateDoc, getFirestore } from "firebase/firestore";
// import ImageUpload from 'image-upload-react'
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";

export default function ProfilePage() {
  

  const {
    userDetails,
    userProfile
  } = useContext(mainFunctions);


  const storage = getStorage();



      const [profile, setProfile] = useState({
        firstname : "",
        lastname : "",
        bank: "",
        bank_no:"",
        phone:""
      })

    const [imageSrc, setImageSrc] = useState("")

    const [profileUpdated, setProfileUpdated] = useState(false)

      const handleChange = (name, value) =>{
        var p = {...profile}
        p[name] = value
        setProfile(p)
        console.log(p)
      }

      const saveProfile = () =>{
        console.log(userDetails.uid)
        updateDoc(doc(getFirestore(), "profiles", userDetails.uid), profile)
        .then((result)=>{
          setProfileUpdated(true)
        })
      }

      const handleImageSelect = (e) =>{
        const file = e.target.files[0];
        const name = file.name.replace(" ","")
        setImageSrc(URL.createObjectURL(file))
        // 'file' comes from the Blob or File API
        uploadBytes(ref(storage, `profiles/${userDetails.uid}`)
        , file).then((snapshot) => {
          console.log(snapshot.ref);
          getDownloadURL(snapshot.ref).then((url) => {
            setImageSrc(url)
          });
        });
      }
      useEffect(()=>{
        getDownloadURL(ref(storage,`profiles/${userDetails.uid}`)).then((url) => {
          setImageSrc(url)
        })
      },[userDetails])
      return(
      <div >
       <PageTitle title="My Account" />
       <div className='container mb-5 clear-fix d-flex flex-column'>
       <div>
       <center> 
       <img
          className='mx-3'
          src={imageSrc}
          style={{
            width: 100,
            height: 100,
            background: '#fff',
            boxShadow:"none",
            borderRadius:"50%"
            
          }}
          
          alt="profile"
      />
      
       <div>
       <input type='file' className='mx-3' accept="image/*" onChange={(e)=>{
       handleImageSelect(e)
       }} style={{margin:"auto"}} />
       </div>
       </center> 
        
        <div
        style={{maxWidth:"500px", margin:"auto"}}
        >
        <SectionHeader title="Personal Information"></SectionHeader>
         <div className='sectionbody'>
           <div className='sectionform form-group'
           
           >
             <label htmlFor="firstname" >First Name</label>
             <input type="text" id="firstname" name="firstname" placeholder='Firstname'
             className='form-control'
             defaultValue={userProfile.firstname}
             onChange={(e)=>handleChange(e.target.name, e.target.value)}
             ></input>
             <br/>
             <label htmlFor="lastname" >Lastname</label>
             <input type="text" id="lastname" name="lastname" 
             placeholder='Lastname'
             className='form-control'
             defaultValue={userProfile.lastname}
             onChange={(e)=>handleChange(e.target.name, e.target.value)}
             ></input>
             
             <label htmlFor="phone" >Phone</label>
             <input type="text" id="phone" name="phone" 
             placeholder='Phone No'
             className='form-control'
             defaultValue={userProfile.phone}
             onChange={(e)=>handleChange(e.target.name, e.target.value)}
             ></input>
             
           </div>
           
         </div>

         <SectionHeader title="Bank Details"></SectionHeader>
         <div className='sectionbody'>
           <div className='sectionform'>
             <label htmlFor="bank" >Bank</label>
             <input type="text" name="bank" placeholder='Bank'
             className='form-control'
             defaultValue={userProfile.bank}
             onChange={(e)=>handleChange(e.target.name, e.target.value)}
             ></input>
             <br/>
             <label htmlFor="bank_no" >Account No</label>
             <input type="text" name="bank_no" placeholder='Account No'
             className='form-control'
             defaultValue={userProfile.bank_no}
             onChange={(e)=>handleChange(e.target.name, e.target.value)}
             ></input>
             
           </div>
           
         </div>
         
         <button className='save-btn btn btn-primary mt-3 mb-5'
         onClick={()=>saveProfile()}
         >Save</button>
         
        </div>
       </div>

       

</div>
      </div>
      )
}
