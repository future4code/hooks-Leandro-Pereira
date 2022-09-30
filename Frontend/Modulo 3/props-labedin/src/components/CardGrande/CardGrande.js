import React from 'react';
import styled from 'styled-components'

const CardGrande1 = styled.main`
  display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const CardGrande2 = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const CardGrande3 = styled.h4`
margin-bottom: 15px;
`

const CardGrande4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <CardGrande1 className="bigcard-container">
            <CardGrande2     src={ props.imagem } />
            <CardGrande4>
            <CardGrande3>{ props.nome }</CardGrande3>
                <p>{ props.descricao }</p>
            </CardGrande4>
        </CardGrande1>
    )
}
export default CardGrande;
