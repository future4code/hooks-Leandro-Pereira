import React from 'react';
import styled from 'styled-components'


const CardPequeno2 = styled.main`
   display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 30px 20px;
    margin-bottom: 10px;
    width: 550px;
`
const CardPequeno3 = styled.img`
    width: 50px;
    height: 50px;
    padding: 10px 10px;
`

function CardPequeno(props){
    return(
        <CardPequeno2 className="small-container">
            <CardPequeno3 src={props.img}/>
            <div>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </div>
        </CardPequeno2>
    )
}

export default CardPequeno;