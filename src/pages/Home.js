import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import MyBlogs from '../components/Blogs'
import MyFooter from '../components/MyFooter'
import MyNavBar from '../components/MyNavBar'
import Sponsors from '../components/Sponsor'

export default function Home() {
  return (
    <div>
        <MyNavBar />
        <MDBContainer>
            <MDBRow>
                <MDBCol md='2'>
                  md="3"
                </MDBCol>
                <MDBCol md='8'>
                {/* <Sponsors /> */}
                <MyBlogs />
                </MDBCol>
                <MDBCol md='2'>
                jdjd
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <MyFooter />
    </div>
  )
}
