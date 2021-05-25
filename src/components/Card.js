import { Link } from 'gatsby'
import React from 'react'
import {CardContainer,CardBody,CardTitle,Cardtext,Button} from '../globals/Global'


const Card = (props) => {
    const {carddata,albumdata} = props;
    
    return (
        <CardContainer>
             <Link to={`/album/${albumdata.id}`}>
                <img src={albumdata.cover_big} alt={carddata.name} />
            </Link>
            <CardBody>
            <small>{albumdata.title}</small>
            <CardTitle>By {carddata.name}</CardTitle>
                <Cardtext>
                    <Button to={`/artist/${carddata.id}`}>View Artists</Button>
                </Cardtext>
            </CardBody>
        </CardContainer>
        
    )
}

export default Card