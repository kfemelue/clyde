# Clyde


## Deployed

Find Clyde deployed here: [Talk to Clyde](https://chatwithclyde.onrender.com/)

## Objective

Clyde is an unhelpful AI assistant. He will only answer correctly occasionally.

## Stack
- Client: HTML/JS/CSS
- Server: Python FastAPI. 
- AI Model: Gemini 3.6 Flash. 
- Hosting: [render.com](https://render.com)
- Key Integrations:
    - The OpenAI SDK is used on the python server to make api calls to the OpenAI compatible Gemini enpoint.
    - Gemini 3.6 Flash was used to generate the Clyde lemon svg for the site logo.
    - The Google Ads SDK is used to create a placeholder for a banner ad in HTML
- Additional Dev Requirements
    - To run the app yourself you will need a Gemini API Key, see [server README.md](./server/README.md)


This project exists primarily as a template for to practice UI Design / Client Application programming fundamentals, but I thought it would be fun to also attach a server and make the AI bot functional using the free tier Gemini Model.

If the app does not respond, I have likely run out of Gemini Free Tier Credits, and have suspended the deployed server.
