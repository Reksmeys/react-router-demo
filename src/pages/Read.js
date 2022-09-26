import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import DetailBlog from '../components/DetailCard'
import MyFooter from '../components/MyFooter'
import MyNavBar from '../components/MyNavBar'

export default function Read() {
  return (
    <div>
        <MyNavBar />
        <MDBContainer>
            <DetailBlog />
        </MDBContainer>
        <MyFooter />
    </div>
  )
}
