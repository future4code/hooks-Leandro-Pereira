import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { Container, Title, Img, Button} from './Styles';




const Profile = (props) => {
    const [match, setMatch] = useState([])

    useEffect(() => {
        getProfileToChoose()
    } , [])

    const getProfileToChoose = () => {
       const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-pereira-hooks/person`
        axios.get(url)
        .then((response)=> {
            setMatch(response.data.profile)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const choosePerson = (id, choice) => {
       const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-pereira-hooks/choose-person"
       const body = {
           id : match.id,
           choice: true
       }
        axios.post(url,body)
        .then((response)=> {
            getProfileToChoose()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    
    const clearScreen = (id, choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-pereira-hooks/choose-person"
        const body = {
            id : match.id,
            choice: false
        }
         axios.post(url,body)
         .then((response)=> {
             getProfileToChoose()
         })
         .catch((error) => {
 
         })
     }

     

    return (
        <Container>
            <Title>Astromatch</Title>      
            <Img src={match.photo} />
            <h2>{match.name} {match.age}</h2>
            <h4>{match.bio}</h4>
            <Button onClick={() =>choosePerson()} >Match</Button>
            <Button onClick={()=>clearScreen()}>Discard</Button>
            <Button onClick={props.goToMatchList}>Go To MatchList</Button>
        </Container>
    )
}
export default Profile;