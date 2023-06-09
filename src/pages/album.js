import React, { useState, useEffect } from 'react'
import axios from "axios"
import {API} from '../components/API'
import {Container, Row, Column,AlbumTitle,AlbumContainer,AlbumSides,ArtistNameInAlbum,ArtistImageInAlbum,
    AlbumSmallTextDescription,LiTrackList,DataTable,BadgeNewAlbum} from '../globals/Global'
import Layout from "../components/layout"
import Seo from "../components/seo"

import {FaShareSquare} from 'react-icons/fa'






const Album = (props) => {

    

    const [artist,setArtist] = useState('')

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let rd = yyyy + '-' + mm + '-' + dd;
    
    const singleArtist = async(props) => {
        let finalResults = []
        try {
        const data = axios.get(`${API}album/${props.id}`)
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
            <Seo title="Album" />
            <Container>
                <Row>
                    <Column>
                      <img src={artist.cover_big} alt={artist.title} />
                    </Column>
                    <Column>
                        <AlbumContainer>
                            <AlbumTitle>{artist &&  artist.title}{String(rd) == artist && artist.release_date ? <BadgeNewAlbum>NEW</BadgeNewAlbum> : " "} </AlbumTitle>
                            {
                                artist &&  artist.contributors.map(contributor => 
                                    <AlbumSides key={contributor.id}>
                                        <ArtistImageInAlbum src={contributor.picture_small} alt={contributor.name} />
                                        <ArtistNameInAlbum to={`/artist/${contributor.id}`}>{contributor.name}</ArtistNameInAlbum>
                                    </AlbumSides>
                                    )
                            }
                           
                            <AlbumSmallTextDescription>
                                            <LiTrackList>{artist && artist.nb_tracks > 1 ? `${artist && artist.nb_tracks } tracks` : `${artist && artist.nb_tracks } track`} </LiTrackList>
                                            <LiTrackList>{Math.floor((artist && artist.duration / 60) / 60)} h {Math.round(artist && artist.duration / 60) - (Math.floor((artist && artist.duration / 60) / 60) * 60)} mins</LiTrackList>
                                            <LiTrackList>{artist && artist.release_date}</LiTrackList>
                                            <LiTrackList>{artist && artist.fans} fans</LiTrackList>
                            </AlbumSmallTextDescription>
                            <AlbumSmallTextDescription>
                                <a href={artist && artist.share}>
                                    <FaShareSquare />
                                </a>
                            </AlbumSmallTextDescription>
                        </AlbumContainer>
                    </Column>
                </Row>
                <Row>
                    <Column>
                    <DataTable>
                    <thead>
                        <tr>
                        
                            <th>Track</th>
                            
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                artist && artist.tracks.data.map(item =>
                                    <tr key={item.id}>
                                    <td> {item.title}</td>
                                <td> {Math.floor(item.duration / 60)}:{item.duration-Math.floor(item.duration / 60) * 60}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    <tfoot>

                    </tfoot>
                    </DataTable>
                    </Column>
                </Row>
                <small>{artist && artist.release_date.slice(0,4)}  | {artist && artist.label}</small>
            </Container>
        </Layout>
    )
}

export default Album
