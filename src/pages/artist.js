import React, { useState, useEffect } from 'react'
import axios from "axios"
import {API} from '../components/API'
import {Container, Row, Column,CardContainer,CardBody,CardTitle,Cardtext} from '../globals/Global'
import Charts from '../components/Charts'

import Layout from "../components/layout"
import Seo from "../components/seo"



const Artist = (props) => {
    const [artist,setArtist] = useState('')
    const singleArtist = async(props) => {
        let finalResults = []
        try {
        const data = axios.get(`${API}artist/${props.id}`)
         finalResults = (await data).data
        }catch(error){
          console.log(error);
        }
    
        try {
            setArtist(finalResults)
        }catch(error){
          console.log(error)
        }
      }
    
      useEffect(() => {
        singleArtist(props)
      }, [props])
    return(
        <Layout>
            <Seo title="Artist" />
            <Container>
                <Row>
                    <Column>
                        <CardContainer>
                        <img src={artist.picture_big} alt={artist.name} />
                        <CardBody>
                        <CardTitle>{artist.name}</CardTitle>
                        <Cardtext>
                           Fans: {artist.nb_fan}
                        </Cardtext>
                        <Cardtext>
                           Albums: {artist.nb_album}
                        </Cardtext>
                        </CardBody>
                        </CardContainer>
                            
                    </Column>
                    <Column>
                            <h2>Top 5 Tracks</h2>
                            <Charts top={artist.id} />
                    </Column>
                    
                </Row>
            </Container>
        </Layout>
    )
}

export default Artist