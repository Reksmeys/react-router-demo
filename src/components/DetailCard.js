import React, { useEffect, useState } from 'react';
import dc from './../assets/images/dc.png'
import {useParams} from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import BlogsActions from '../services/actions/BlogsActions';

export default function DetailBlog() {

    const {id} = useParams()

    const [read, setRead] = useState()

    console.log(id)

    // BlogsActions.getBlog(id).then(res => res.json()).then(data => setRead(data))

    useEffect(() => {
        // read && console.log(JSON.stringify(params))
        BlogsActions.getBlog(id).then(res => res.json()).then(res => setRead(res))
    }, [])

  return (

      read && <MDBCard className='my-3'>
      <MDBCardImage position='top' src={dc} alt='dc cover' />
      <MDBCardBody>
        <MDBCardTitle style={{color: 'darkblue', fontSize: 30}}>Read: {read.title}</MDBCardTitle>
        <MDBCardText>
          <b>real data</b>: {read.body}
          Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classNames to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.
          Note: Content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.
          <MDBCardImage src={dc} position='top'/>
          Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classNames to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.
          Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classNames to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.
        </MDBCardText>
        <MDBCardText>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

  );
}
