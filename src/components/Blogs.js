import React, { useEffect, useState } from 'react';
import owner from './../assets/images/mine.jpeg'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';
import BlogsActions from '../services/actions/BlogsActions';
import { Link } from 'react-router-dom';

export default function MyBlogs() {

    const [blog, setBlog] = useState([{}])

    useEffect(() => {
        BlogsActions.getBlogs().then(res => res.json()).then(res => setBlog(res))
    }, [])

  return (
 
    blog && blog.map(data => (
      <MDBCard className='my-2' key={Number(data.id)}>
      <MDBCardBody>
        <div className="d-flex">
            <div className="avatar avatar-sm">
                <MDBNavbarLink href="#"><MDBCardImage className="avatar-img rounded-circle" src={owner} alt="avatar" width="50" height="50" /></MDBNavbarLink>
            </div>
            <div className="d-flex flex-column">
                <span className="text-darkblue"><MDBNavbarLink href="#">Mey</MDBNavbarLink></span>
                <small>9-Sep-2022 : <b>13:09 am <i className="fa-solid fa-earth-asia mx-2"></i></b></small>
            </div>
        </div>
        <MDBCardTitle className='text-center mt-2'>
            <Link to={"/read/"+data.id}>
              {data.title}
            </Link>
        </MDBCardTitle>
        <MDBCardText className='text-center'>
          {data.body}
        </MDBCardText>
        
        <MDBBadge pill className='mx-2' color='secondary' light>
            Programming
        </MDBBadge>
        <MDBBadge pill className='mx-2' color='secondary' light>
            Flexbox
        </MDBBadge>
        <MDBBadge pill className='mx-2' color='secondary' light>
            Tips
        </MDBBadge>
      </MDBCardBody>
    </MDBCard>
    ))

  );
}



