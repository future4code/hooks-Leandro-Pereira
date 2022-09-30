import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid black;
    width:40%;
    margin: 0 auto;
    height: 100vh;
    background-color: white;
    overflow-y:scroll;
`

export const Img = styled.img`
    display:grid;
    width:10vw;
    height:10vh;
    border-radius: 50px;
`

export const DeleteButton = styled.img`
    display:flex;
    width:50px;
    height:50px;
    position:fixed;
    bottom:0;
    right:400px;
`

export const ButtonProfile = styled.button`
display:flex;
position:fixed;
bottom:0;
`

export const Title = styled.h1`
    display:flex;
    justify-content: center;
`
