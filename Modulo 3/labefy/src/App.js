import React from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle"
import ReactAudioPlayer from "react-audio-player";

const urlCreatePlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const CardList = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
  width: 730px;
  align-items: center;
  justify-content: space-between;
  margin-left:250px;
`;

const Title = styled.h1`
color: white;
display:flex;
margin-left:540px;
font-size: 40px;
margin-bottom: 20px;

`

const CardButton = styled.button`
  display: flex;
  justify-content: space-between;
`

const CardButton2 = styled.button`
  display: flex;
  margin-left:540px;
  padding:10px;
  width:80px;
  margin-bottom: 20px;
`

const CardInput = styled.input`
margin-left: 100px;
border: 1px solid black;
border-radius: 10px;
padding:10px;
margin-bottom: 20px;
`

const headersAuthorization = {
  headers: {
    Authorization: "leandro-pereira-hooks",
  },
};

class App extends React.Component {
  state = {
    inputPlaylists: "",
    inputTrack: "",
    inputArtist: "",
    inputUrl: "",
    playlists: [],
    tracks: [],
    id: "",
  };
  componentDidMount() {
    this.GetAllPlaylists();
  }

  CurrentPlaylist = (event) => {
    this.setState({ inputPlaylists: event.target.value });
  };

  ToDeletePlaylist = (event) => {
    this.setState({ id: event.target.value });
  };

  CurrentTracks = (event) => {
    this.setState({ inputTrack: event.target.value });
  };

  CurrentArtist = (event) => {
    this.setState({ inputArtist: event.target.value });
  };

  CurrentUrl = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  CreatePlaylist = () => {
    const body = {
      name: this.state.inputPlaylists,
    };
    axios
      .post(urlCreatePlaylist, body, headersAuthorization)
      .then((response) => {
        alert(
          `The playlist ${this.state.inputPlaylists} was created successfully!`
        );
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
    this.setState({ inputPlaylists: "" });
    this.GetAllPlaylists();
  };

  GetAllPlaylists = () => {
    axios
      .get(urlCreatePlaylist, headersAuthorization)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  GetPlaylistTracks = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    axios
      .get(url, headersAuthorization)
      .then((response) => {
        this.setState({ tracks: response.data.result.tracks });
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  DeletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, headersAuthorization)
      .then((response) => {
        alert("User successfully deleted!");
        this.GetAllPlaylists();
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  AddTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.inputTrack,
      artist: this.state.inputArtist,
      url: this.state.inputUrl,
    };
    axios
      .post(url, body, headersAuthorization)
      .then((response) => {
        alert("song added successfully!");
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  render() {
    const newPlaylist = this.state.playlists.map((playlist) => {
      return (
        <CardList key={playlist.id}>
          {playlist.name}
          <CardButton onClick={() => this.AddTrackToPlaylist(playlist.id)}>
            Add Tracks
          </CardButton>
          <CardButton onClick={() => this.GetPlaylistTracks(playlist.id)}>
            To See Playlist
          </CardButton>
          <CardButton onClick={() => this.DeletePlaylist(playlist.id)}>
            Delete
          </CardButton>
        </CardList>
      );
    });

    const newTrackList = this.state.tracks.map((track) => {
      return (
        <div key={track.id}>
          <ul>
            <li>{track.name}</li>
          </ul>
          <ul>
            <li>{track.artist}</li>
          </ul>
          <ul>
            <ReactAudioPlayer src={track.url} controls />
          </ul>
        </div>
      );
    });

    return (
      <div>
        <GlobalStyle/>
        <Title>Labefy</Title>
        <CardInput
          placeholder="Add Tracks"
          value={this.state.inputTrack}
          onChange={this.CurrentTracks}
        />
        <CardInput
          placeholder="Add Artist"
          value={this.state.inputArtist}
          onChange={this.CurrentArtist}
        />
        <CardInput
          placeholder="Add url"
          value={this.state.inputUrl}
          onChange={this.CurrentUrl}
        />
        <CardInput
          placeholder="Create Playlist"
          value={this.state.inputPlaylists}
          onChange={this.CurrentPlaylist}
        />
        <CardButton2 onClick={this.CreatePlaylist}>Create Playlist</CardButton2>
        {newPlaylist}
        {newTrackList}
      </div>
    );
  }
}
export default App;
