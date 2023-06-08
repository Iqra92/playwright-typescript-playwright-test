import { expect } from "@playwright/test";


var token = "BQDlPy9DISQietf-8UupkHLpA1zxuHDY91vaPDQOOUrQ3Nk60lYs4YWirpUvLjw5y-QhxBzE6VbvzGd9xfs3w03HQB8GJo0OeiWP3teyrBH4WET8c639Ce5Gp0702KgYcDEdjBe77_X1wb3sW_Gxf_wsspd-4bgLIgSWisCicNdAEovrHTOLIxw_ODsRcIhweujfalZeN7p2-TUIEKZ38-NIRPwLy4Zx2tY85G4tpeyJtVET1NfgNHs8Y0QUZSGPVpCwHkB-F9D8LQ"
const baseUrl = 'https://api.spotify.com/v1/';
var endpointUrl = ""
const user_id = '31glf5darbrb3n7yzrcozxj2miiu'
var playlistID = ''
var uri = ''
var snapShortID = ''
const uriList: string[] = [];
const clientId = "1ee7782a5dd04450ac03a44094668c3a"
const clientSecretId = "99b5e0e3b17c48878bea4ee721497e22"


export class SpotifyFlow {

    constructor() { }


    async createSpotifyPlayList(playwright) {
        endpointUrl = "users/"
        const url = baseUrl + endpointUrl + user_id + '/playlists'
        const apiContext = await playwright.request.newContext();
        const createPlayListResponse = await apiContext.post(url, {
            data: {
                "name": "Oyawin Songs",
                "public": "false", 
                "collaborative": "true", 
                "description": "This is my awesome playlist!" 
            },
            headers: {
                'Authorization': 'Bearer ' + token
            },

        });

        const resBody = JSON.parse(await createPlayListResponse.text())
        playlistID = resBody.id
        console.log(resBody)
        console.log(resBody.id)
        expect(createPlayListResponse.status()).toBe(201)
        expect(createPlayListResponse.ok()).toBeTruthy();

    }


    async searchTrackTitleBohemian(playwright): Promise<void> {
        endpointUrl = "search?"
        const search = 'q=Bohemian'
        const type = '&type=track';
        const limit = '&limit=4';
        const url = baseUrl + endpointUrl + search + type
        const apiContext = await playwright.request.newContext();
        const searchItemResponse = await apiContext.get(url, {

            headers: {
                'Authorization': 'Bearer ' + token
            },

        });

        const resBody = JSON.parse(await searchItemResponse.text())
        expect(searchItemResponse.status()).toBe(200)
        expect(searchItemResponse.ok()).toBeTruthy();

    }

    async get4RandomSongs(playwright): Promise<void> {
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

        endpointUrl = "search?"
        const search = 'q=' + randomSearch
        const type = '&type=track';
        const limit = '&limit=4';
        const url = baseUrl + endpointUrl + search + type
        const apiContext = await playwright.request.newContext();
        const searchItemResponse = await apiContext.get(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            },

        });
        const resBody = JSON.parse(await searchItemResponse.text())
        var items = resBody.tracks.items;

        var i = 0;
        for (const res of items) {
            uriList.push(res.uri)
            i++;
            if (i == 4) {
                break
            }
        }

        expect(searchItemResponse.status()).toBe(200)
        expect(searchItemResponse.ok()).toBeTruthy();

    }

   async  add4RandomSongsIntoPlayList(playwright): Promise<void> {
        uriList
        endpointUrl = "playlists/"
        const url = baseUrl + endpointUrl + playlistID + '/tracks'
        const apiContext = await playwright.request.newContext();
        const addSongPlayList = await apiContext.post(url, {
            data: {

                "uris":
                    uriList
                ,
                "position": 0

            },
            headers: {
                'Authorization': 'Bearer ' + token
            },

        });
        const resBody = JSON.parse(await addSongPlayList.text())
        snapShortID = resBody.snapshot_id
        console.log(resBody)
        console.log(snapShortID)
        expect(addSongPlayList.status()).toBe(201)
        expect(addSongPlayList.ok()).toBeTruthy();

    }

    async delete2RandomSongs(playwright): Promise<void> {
        const shuffledArray = [...uriList];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        shuffledArray
        endpointUrl = "playlists/"
        const url = baseUrl + endpointUrl + playlistID + '/tracks'
        const apiContext = await playwright.request.newContext();
        const deleteTrackResponse = await apiContext.delete(url, {
            data: {
                "tracks": [
                    {
                        "uri": shuffledArray[0]
                    },
                    {
                        "uri": shuffledArray[1]
                    }
                ],
                "snapshot_id": snapShortID,
            },
            headers: {
                'Authorization': 'Bearer ' + token
            },

        });
        const resBody = JSON.parse(await deleteTrackResponse.text())
        var snapshot_id = resBody.snapshot_id
        console.log(resBody)
        console.log(snapshot_id)
        expect(deleteTrackResponse.status()).toBe(200)
        expect(deleteTrackResponse.ok()).toBeTruthy();

    }

    async deleteWholePlayList(playwright): Promise<void> {
        endpointUrl = "playlists/"
        const url = baseUrl + endpointUrl + playlistID + '/followers'
        const apiContext = await playwright.request.newContext();
        const deletePlayListResponse = await apiContext.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            },

        });
        const resBody = JSON.parse(await deletePlayListResponse.text())
        expect(deletePlayListResponse.status()).toBe(200)
        expect(deletePlayListResponse.ok()).toBeTruthy();
    }

}