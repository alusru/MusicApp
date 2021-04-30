import React, { useState, useEffect } from 'react'
import axios from "axios"
import {API} from '../components/API'
import {Container, Row, Column,Input} from '../globals/Global'
import Card from '../components/Card'

const Home = () => {
    const [search,setSearch] = useState('beyonce');
  const [result,setResult] = useState([]);
  
  const handleSearchChange = event => {
    setSearch(event.target.value);
    //console.log(typeof event.target.value)
  }
  const results = async(search) => {
    let finalResults = [];
    try {
    const data = axios.get(`${API}search/?q=${search}`);
    finalResults = (await data).data;
    
    }catch(error){
      console.log(error);
    }
    try {
      setResult(finalResults.data );
    }catch(error){
      console.log(error);
    }
  }

if(result === null){
    console.log('Mbuso')
}

 
 

  useEffect(() => {
    results(search);
  }, [search]);
    return (
        <Container>
            <Row>
                <Column>
                    <Input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                    />
                </Column>
            </Row>
          
            <Row>
            {
               
                result && result.map(item => 
                    
                    <Column key={item.id}> 
                     <Card   carddata={item.artist} albumdata={item.album}/>
                    </Column>
                    
                )       
            } 
            </Row>
                
        </Container>
    )

}

export default Home