# TAL_Adactin
This project consists of the following parts
 - An Api Project - done in C#.Net core 6
 - UI - done in Angular 14


## TAL.Client
    - This folder contains the UI build in Angular 14

    ### References used for building UI
    - Font : https://fonts.google.com/specimen/Roboto
    - Colors : https://material.io/resources/color/

## TAL.API
    - This folder contains the api project done in C#.Net Core  

    ### Origin URLs acceptable as per CORS configuration
        - http://localhost:4200 (Default port)
        - http://localhost:49357
        - Please find this configuration in the Program.cs inside the API project
        Hence Angular app should be running in either of the above mentioned ports, in order to get access to the API

    ### Port configured for API project
        - 5279 
        - URL - http://localhost:5279
        - Profile - TAL.Api
        - Please find this configuration in launchSettings.json inside the API project
        - The Angular app is consuming this as the API base URL (Please see apiBaseUrl constant in environment.ts inside the angular app)


## How to run the feature
    ### Run the API project 
        - Go to TAL.Api folder
        - Open the TAL.Api.sln in Visual Studio
        - Run using TAL.Api profile (port : 5279 , already configured in launch settings)

    ### Run Angular App
        - Prerequisites - nodejs
        - Once nodejs is installed, go to TAL.Client and do npm install
        - Run the command ng serve or ng serve --port 49357 (if angular CLI is installed) or run npm start


