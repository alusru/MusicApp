import React, { useState, useEffect } from 'react'
import axios from "axios"
import {API} from '../components/API'
import {AlbumCover,TrackList,DataTable,AlbumTableData} from '../globals/Global'
import ReactAudioPlayer from 'react-audio-player';

const Charts = (props) => {
    const {top} = props
    
    const [toptracks,setTopTracks] = useState([])
    
    const singleArtist = async(top) => {
        let finalResults = []
        try {
        const data = axios.get(`${API}artist/${top}/top?limit=5`)
         finalResults = (await data).data
        }catch(error){
          console.log(error);
        }
    
    
        try {
            setTopTracks(finalResults.data)
        }catch(error){
          console.log(error)
        }
      }
    
      useEffect(() => {
        singleArtist(top)
      }, [top])

    
    return(
        <TrackList>
            <DataTable>
            <thead>
                    <tr>
                       <th>Cover</th>
                       <th>Title</th>
                       <th>Preview</th>
                   </tr>
            </thead>
            <tbody>
                {
                    toptracks && toptracks.map(tracks  =>
                    <tr key={tracks.id}>
                        <AlbumTableData><AlbumCover src={tracks.album.cover_big} alt={tracks.album.title} /></AlbumTableData>
                        <AlbumTableData>{tracks.title} </AlbumTableData>
                        <AlbumTableData><ReactAudioPlayer src={tracks.preview} controls style={{width:"190px", height:"30px"}} /></AlbumTableData>
                    </tr>
                    )
                }
            </tbody>
            <tfoot>

            </tfoot>
            </DataTable>
        </TrackList>
    )
}

export default Charts