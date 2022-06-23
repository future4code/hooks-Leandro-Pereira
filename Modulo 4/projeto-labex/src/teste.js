import { useState, useEffect} from "react"
import axios from "axios";
import {countries} from "../constants/constants"

const ApplicationFormPage = () => {
    const [tripList, setTripList] = useState([])
    const [trip, setTrip] = useState("")
    const [nameApplyed, setNameApplyed] = useState("")
    const [ageApplyed, setAgeApplyed] = useState("")
    const [textApplyed, setTextApplyed] = useState("")
    const [professionApplyed, setProfessionApplyed] = useState("")
    const [countryApplyed, setCountryApplyed] = useState("")
    const [id, setId] = useState("")

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips")

            .then((response) => {
                setTripList(response.data.trips)
            }
        )
            .catch((error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {getTrips()}, [])

    const applyToTrip = () => {
        const body = {
            name : nameApplyed,
            age : ageApplyed,
            applicationText : textApplyed,
            profession : professionApplyed,
            country : countryApplyed
         }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diogo-bomfim-hooks/trips/${id}/apply`, body)
            .then((response) => {
                alert("deu bom")
                setTrip("")
                setNameApplyed("")
                setAgeApplyed("")
                setTextApplyed("")
                setProfessionApplyed("")
                setCountryApplyed("")
            }
        )
            .catch((error) => {
                alert("deu ruim")
                setTrip("")
                setNameApplyed("")
                setAgeApplyed("")
                setTextApplyed("")
                setProfessionApplyed("")
                setCountryApplyed("")
            }
        )
    }       

    const onChangeName = (event) => {
        setNameApplyed(event.target.value)
    }

    const onChangeAge = (event) => {
        setAgeApplyed(event.target.value)
    }

    const onChangeText = (event) => {
        setTextApplyed(event.target.value)
    }

    const onChangeProfession= (event) => {
        setProfessionApplyed(event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountryApplyed(event.target.value)
    }

    const onChangeId = (event) => {
        setId(event.target.value)
        setTrip(event.target.value)
    }	 

    const renderTrips = tripList.map((trip) => {
        return <FormOption key={trip.id} value={trip.id}> {trip.name} </FormOption>         
    }
)

    const renderCountries = countries.map((country, i) => {
        return <FormOption key={i}> {country} </FormOption>
    }
)

    return (
        <div>

            <FormH1Div>
                <FormH1>Inscreva-se para uma viagem</FormH1>
            </FormH1Div>

            <Form>
                <FormContainer>
                    <FormSelect value={trip} onChange={onChangeId}>
                        <FormOption>Selecionar viagem</FormOption>
                        {renderTrips}
                    </FormSelect>

                    <FormInput placeholder="Nome" value={nameApplyed} onChange={onChangeName}/>
                    <FormInput placeholder="Idade" value={ageApplyed} onChange={onChangeAge}/>
                    <FormInput placeholder="Profissão" value={professionApplyed} onChange={onChangeProfession}/>

                    <FormSelect value={countryApplyed} onChange={onChangeCountry}>
                        <FormOption>Selecionar País</FormOption>
                        {renderCountries}
                    </FormSelect>

                    <FormTextArea placeholder="Texto de candidatura" value={textApplyed} onChange={onChangeText}/>
                    <FormButtonsDiv>
                        <Button endIcon={<SendIcon/>}variant="contained" size="medium" disableElevation onClick={() => applyToTrip()}>Enviar</Button>
                    </FormButtonsDiv>
                </FormContainer>
            </Form>

            <FooterFixo>
                    <p>© 2022 Todos direitos reservados.</p>
            </FooterFixo>
        </div>
    )
}

export default ApplicationFormPage; 