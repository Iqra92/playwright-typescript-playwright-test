import test from '@lib/BaseTest';
import { GenerateRandom } from '@pages/GenerateRandom';
import { expect } from '@playwright/test';
import { Buffer } from 'buffer';
// import { SpotifyWebApi } from 'spotify-web-api-ts/types';
// import { SpotifyWebApi } from 'spotify-web-api-ts/types';

var token = "BQC_V-FSuq4bdUTuy3lKxIIxQ3ivgo9D9Qf_bdGZkddzeUZL4S-GCHlE4IE2IU_rGarLrU3jMxjCgGYvMKMWm5qaVnifBA8LSB0-v_FkLLdwhJs9moA"
const baseUrl = 'https://api.spotify.com/v1/';
var endpointUrl =""
const user_id = '31glf5darbrb3n7yzrcozxj2miiu'
var playlistID = ''
var uri =''
var snapShortID = ''
const uriList: string[] = [];
const clientId = "1ee7782a5dd04450ac03a44094668c3a"
const clientSecretId = "99b5e0e3b17c48878bea4ee721497e22"
// https://oauth.pstmn.io/v1/browser-callback


test(`@Test Cases: API Test Automation Case for Spotify`, async ({playwright, page}) => {


    // await test.step(`Get Auth Token`, async () => {
    // var authString = clientId +":"+clientSecretId;
    // const authBase64 = Buffer.from(authString).toString('base64');
    // const newURL = "https://accounts.spotify.com/api/token"

    
    // const apiContext = await playwright.request.newContext();
    // const authTokenResponse = await apiContext.post(newURL,{

    //      form:{
    //         'grant_type': 'client_credentials'
    //     },

    //     headers:{
    //         'Authorization': 'Basic '+authBase64,
    //         'Content-Type': ' application/x-www-form-urlencoded'
    //     },
     

    //     });
    //     const resBody = JSON.parse(await authTokenResponse.text())
    //         token =  resBody.access_token

    //     // expect(resBody.statusCode ()).toBe(200)
    //     // expect(resBody.ok()).toBeTruthy();

    // }); 

    await test.step(`Create a play list named “Oyawin Songs”`, async () => {

            endpointUrl ="users/"
            const url = baseUrl+endpointUrl + user_id +'/playlists'
            const apiContext = await playwright.request.newContext();
            const createPlayListResponse = await apiContext.post(url,{

                data:{
                    "name" : "Oyawin Songs",
                     "public": "false", // Set to true if you want the playlist to be public
                    //  "collaborative": "true", // Set to true if you want the playlist to be collaborative
                     "description": "This is my awesome playlist!" // Optional playlist description
                 },

                headers:{
                    'Authorization': 'Bearer '+token
                },
             

});
    
                           const resBody =  JSON.parse(await createPlayListResponse.text())
                           playlistID =  resBody.id
                           console.log(resBody)
                           console.log(resBody.id)
                           expect(createPlayListResponse.status()).toBe(201)
                           expect(createPlayListResponse.ok()).toBeTruthy();
    
        }); 
//////////////////////////////////////Search “Bohemian/////////////////////////////////////////////////////////////////////
        



        await test.step(`Search for the song named “Bohemian Rhapsody”`, async () => {

    
        
      
            endpointUrl ="search?"
            // const search = 'q=Bohemian';
            const search = 'q=Bohemian'
            const type = '&type=track';
            const limit = '&limit=4';
            const url = baseUrl+endpointUrl + search + type
            const apiContext = await playwright.request.newContext();
            const searchItemResponse = await apiContext.get(url,{

         

                headers:{
                    'Authorization': 'Bearer '+token
                },
             

});
    
                const resBody =  JSON.parse(await searchItemResponse.text())
             
               
                expect(searchItemResponse.status()).toBe(200)
                expect(searchItemResponse.ok()).toBeTruthy();

    
        }); 




        //////////////////////////////////////Search 4 randoms Songs add to the list/////////////////////////////////////////////////////////////////////
        



        await test.step(`Search 4 random songs, Add to the list`, async () => {

            const characters = 'abcdefghijklmnopqrstuvwxyz';
        
        // Gets a random character from the characters string.
        const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
        let randomSearch = '';
      
        // Places the wildcard character at the beginning, or both beginning and end, randomly.
        switch (Math.round(Math.random())) {
          case 0:
            randomSearch = randomCharacter + '';
            break;
          case 1:
            randomSearch = '' + randomCharacter + '';
            break;
        }
      
            endpointUrl ="search?"
            // const search = 'q=Bohemian';
            const search = 'q='+randomSearch
            const type = '&type=track';
            const limit = '&limit=4';
            const url = baseUrl+endpointUrl + search + type
            const apiContext = await playwright.request.newContext();
            const searchItemResponse = await apiContext.get(url,{

         

                headers:{
                    'Authorization': 'Bearer '+token
                },
             

});
    
                const resBody =  JSON.parse(await searchItemResponse.text())
                var items =  resBody.tracks.items; 
              
               
                var i = 0;
                for (const res of items){
                 
                        uriList.push(res.uri)
                       
                    
                  
                    i++;
                    if(i==4){
                        break
                    }
                }
               
                expect(searchItemResponse.status()).toBe(200)
                expect(searchItemResponse.ok()).toBeTruthy();
                // console.log(items[0].album.album_type);
                // console.log(resBody)
            
                // expect(searchItemResponse.status()).toBe(200)
                // expect(searchItemResponse.ok()).toBeTruthy();
    
        }); 
    

////////////////////////////////////Add 4 random songs to the playlist///////////////////////////////////////////////////////////////////////////////////

        await test.step(`Add 4 random songs to the playlist`, async () => {

            // const spotifyApi = new SpotifyWebApi();
      
                        
            // const trackResponse = await spotifyApi.search.searchTracks("track:random", { limit: 4 });
            uriList
            endpointUrl ="playlists/"
            const uris = "?uris=spotify:track:3nDstVXtr6xbCZKs5Ka2rZ"
            const url = baseUrl+endpointUrl + playlistID +'/tracks' 
            const apiContext = await playwright.request.newContext();
            const addSongPlayList = await apiContext.post(url,{

                data:{
                    
                        "uris": 
                            uriList
                        ,
                        "position": 0
                    
                },

                headers:{
                    'Authorization': 'Bearer '+token
                },
             

});
    
                           const resBody = JSON.parse(await addSongPlayList.text())
                           snapShortID =  resBody.snapshot_id
                           console.log(resBody)
                           console.log(snapShortID)
                           expect(addSongPlayList.status()).toBe(201)
                           expect(addSongPlayList.ok()).toBeTruthy();
    
        }); 



        //////////////////////////////Delete 2 random songs from playlist////////////////////////////////////////////////////////////////


        await test.step(`Delete 2 random songs from playlist`, async () => {

            // const spotifyApi = new SpotifyWebApi();
      
                        
            // const trackResponse = await spotifyApi.search.searchTracks("track:random", { limit: 4 });

           //https://api.spotify.com/v1/playlists/:playlist_id/tracks
        
           const shuffledArray = [...uriList];

           for (let i = shuffledArray.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
           }

           shuffledArray
            endpointUrl ="playlists/"
            const url = baseUrl+endpointUrl + playlistID +'/tracks'
            const apiContext = await playwright.request.newContext();
            const deleteTrackResponse = await apiContext.delete(url,{
                
                data:{
                    "tracks":[
                        {
                            "uri": shuffledArray[0]
                        },
                        {
                            "uri": shuffledArray[1]
                        }
                    ],
                  
                     "snapshot_id": snapShortID, 
                 },

                headers:{
                    'Authorization': 'Bearer '+token
                },
             

});
    
                           const resBody = JSON.parse(await deleteTrackResponse.text())
                           var snapshot_id =  resBody.snapshot_id
                           console.log(resBody)
                           console.log(snapshot_id)
                           expect(deleteTrackResponse.status()).toBe(200)
                           expect(deleteTrackResponse.ok()).toBeTruthy();
    
        }); 


         //////////////////////////////Delete whole playlist////////////////////////////////////////////////////////////////
        // https://api.spotify.com/v1/playlists/{playlist_id}/followers

         await test.step(`Delete whole list`, async () => {

            // const spotifyApi = new SpotifyWebApi();
      
                        
            // const trackResponse = await spotifyApi.search.searchTracks("track:random", { limit: 4 });

           //https://api.spotify.com/v1/playlists/:playlist_id/tracks
        
           //https://api.spotify.com/v1/users/me/playlists/${playlistId}
            endpointUrl ="playlists/"
            const url = baseUrl+endpointUrl + playlistID +'/followers'
            const apiContext = await playwright.request.newContext();
            const deletePlayListResponse = await apiContext.delete(url,{
                

                headers:{
                    'Authorization': 'Bearer '+token
                },
             

        });
    
                        //    const resBody = JSON.parse(await deletePlayListResponse.text())
                        //    console.log(resBody)
                           expect(deletePlayListResponse.status()).toBe(200)
                           expect(deletePlayListResponse.ok()).toBeTruthy();
    
        }); 


    
    }); 
    




