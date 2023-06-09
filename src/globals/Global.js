import styled from 'styled-components'
import { Link } from 'gatsby'


export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media screen and (min-width: 1200px){
       width: 1170px;
    }
//     @media screen and (min-width: 992px){
//        width: 970px;
//     }
//     @media screen and (min-width: 768px){
//        width: 750px;
//     }
`

export const Row = styled.div`
margin-right: -15px;
margin-left: -15px;
display:flex;
flex-wrap: wrap;
`

export const Column = styled.div`
max-width: 100%;
flex-grow: 1;
flex-basis: 0;
`

export const Input = styled.input`

    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 1;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 30px 0;


`

export const CardContainer = styled.div`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    width: 18rem;
    margin: 25px 0;

`

export const Button = styled(Link)`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    color: #6c757d;
    border-color: #6c757d;

    &:hover{
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

`

export const CardBody = styled.div`
-ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`

export const CardTitle = styled.h5`
    margin-bottom: .75rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem;
`


export const AlbumTitle = styled.h5`
margin-bottom: .75rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem;
    
`


export const ArtistImageInAlbum = styled.img`
    border-radius: 42px;
`

export const AlbumSmallTextDescription = styled.ul`
    display: flex;
    margin: 0;
    font-size: 14px;
`

export const AlbumSides = styled.div`
    display: inline-flex;
    vertical-align: top;
    
`

export const ArtistNameInAlbum = styled(Link)`
margin-top: 12px;
margin-left: 12px;
`

export const AlbumContainer = styled.div`
    margin: 0 12px;
`

export const Cardtext = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`

export const AlbumCover = styled.img`
    width: 35%;
    border-radius: 60%;
    position: relative;
    top: 14px;
`

export const AlbumTableData = styled.td`
width: 40%;
    padding: 0;
    font-size: 12px;
    margin: 0;
    line-height: 0;
`

export const TrackList = styled.ul`
list-style: none;
margin: 0;
`

export const LiTrackList = styled.li`
display: flex;

&:before{
    content:"-";
    margin: 0 3px;
}
`

export const DataTable = styled.table`
color: #000;
`

export const BadgeNewAlbum = styled.span`
color: #fff;
background-color: #ff7300;

display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
`;

