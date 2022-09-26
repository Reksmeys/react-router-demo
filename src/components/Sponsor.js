import React from "react";
import istad from "./../assets/images/istad-cover.png";
import dc from './../assets/images/dc.png'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardHeader,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Sponsors() {
  return (
    <>
      <MDBCard className="my-3">
        <MDBCardImage position="top" src={istad} alt="ISTAD Cover" />
        <MDBCardBody>
          <MDBCardText className="text-center">
            ISTAD is a noteworthy science and technology institute in Cambodia.
            ISTAD has routed Cambodian students to advanced science and
            technology, research, and develop digital skills and our graduates
            have been guaranteed excellent job opportunities with the Top IT
            company.
          </MDBCardText>
          <MDBCardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard shadow="0" border="info" background="white" className="mb-3">
        <MDBCardImage position="top" src={dc} alt="DC Cover" />
        <MDBCardBody>
          <MDBCardTitle className="text-center">
            To become a member of Developers Community <br />
            <MDBBtn outline rounded color='success' href="https://t.me/devkh_support" className="mt-3">
                Join Developers Cambodia Group Telegram
            </MDBBtn>
          </MDBCardTitle>
          
          <MDBCardText className="mt-4 text-center">
            Join our official telegram group for further discussion on
            technology.
          </MDBCardText>
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" size="lg" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#55acee" }}
          >
            <MDBIcon fab icon="twitter" size="lg" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#dd4b39" }}
          >
            <MDBIcon fab icon="google" size="lg" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#ac2bac" }}
          >
            <MDBIcon fab icon="instagram" size="lg" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
