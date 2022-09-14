import React, { useState, useEffect } from "react";
import axios from "axios";
import {Img, DeleteButton, Container, ButtonProfile, Title} from './Styles'

const MatchList = (props) => {
  const [users, setUsers] = useState([]);

  const getMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-pereira-hooks/matches";
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data.matches);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getMatches();
  }, [getMatches()]);

  const deleteAllMatches = () => {
    axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-pereira-hooks/clear"
    )
    .then((response)=> {
        alert("Successfully Completed")
    })
    .catch(err => {

    })
  };

  const renderList = users.map((user) => {
    return (
      <div key={user.id}>
        <Img src={user.photo} />
        <p>{user.name}</p>
      </div>
    );
  });

  

  return (
    <Container>
      <Title>MatchList</Title>
      {renderList}
      <ButtonProfile onClick={props.goToProfile}>Go to Profile</ButtonProfile>
      <DeleteButton src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5v
                cmcvMjAwMC9zdmciIGNsYXNzPSJNdWlTdmdJY29uLXJvb3QiIGZvY3VzYWJsZT0iZmFsc2UiIH
                ZpZXdCb3g9IjAgMCAyNCAyNCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGQ9Ik02IDE5YzAgMS
                4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xID
                FINXYyaDE0VjR6Ii8+PC9zdmc+
" onClick={deleteAllMatches} />
    </Container>
  );
};
export default MatchList;
