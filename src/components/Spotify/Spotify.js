const clientId = 'abbde673064448dfb7f338fb683c77e4'; // You get this from the Spotify developer dashboard
const redirectUri = 'http://localhost:3000'; // This should be the URL of your app

let accessToken;

const Spotify = {
    getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
  
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
      }
    },

    getUserId() {
      const headers = {
          Authorization: `Bearer ${this.getAccessToken()}`
      };
  
      return fetch('https://api.spotify.com/v1/me', {headers: headers})
          .then(response => response.json())
          .then(jsonResponse => {
              return jsonResponse.id;
          });
    },

    createPlaylist(userId, playlistName) {
      const headers = {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'Content-Type': 'application/json'
      };
      
      const requestBody = JSON.stringify({
          name: playlistName,
          description: 'Created with Jammming'
      });
  
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers: headers,
          body: requestBody
      })
      .then(response => response.json())
      .then(jsonResponse => {
          return jsonResponse.id;
      });
    },

    addTracksToPlaylist(userId, playlistId, trackUris) {
      const headers = {
          Authorization: `Bearer ${this.getAccessToken()}`,
          'Content-Type': 'application/json'
      };
      
      const requestBody = JSON.stringify({
          uris: trackUris
      });
  
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          method: 'POST',
          headers: headers,
          body: requestBody
      })
      .then(response => response.json())
      .then(jsonResponse => {
          return jsonResponse.snapshot_id;
      });
    },
  
    search(term) {
      const accessToken = Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
    }
  };
  
  export default Spotify;