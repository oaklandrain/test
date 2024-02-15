
    // let tokenurl = 'https://api.imgur.com/oauth2/authorize?response_type=token'
    let clientId = '45cef6b315edaf8'
    let queryURL = 'https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats'

    //var auth;
    //if (token) auth = 'Bearer ' + token;
    //else auth = 'Client-ID ' + clientId;
    const token = '8a1b7a0afa055d4dd88c79acd624a42509f1a895'
    //Settings for Request
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": queryURL,
        "method": "GET",
        "headers": {
            "Authorization": 'Client-ID 45cef6b315edaf8'}
    }
    $.ajax(settings).done(function(response) {
        console.log(response.data)
    })

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Client-ID 45cef6b315edaf8");
    //
    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    // };
    // let url = `https://api.imgur.com/3/credits`;
    // let url2 = `https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats`
    // fetch(url, requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    // async function fetchImgurData() {
    //     const clientId = 'YOUR_CLIENT_ID'; // Replace 'YOUR_CLIENT_ID' with your actual Imgur client ID
    //     const url = 'https://api.imgur.com/3/gallery/hot/viral/0.json';
    //
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Client-ID ${clientId}`
    //             }
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data from Imgur');
    //         }
    //
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching data from Imgur:', error);
    //         return null;
    //     }
    // }
    //
    // // Usage
    // fetchImgurData()
    //     .then(data => {
    //         console.log(data);
    //         // Do something with the fetched data
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
