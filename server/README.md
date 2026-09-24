# Server

To run locally:
1. Clone repository
2. cd into `server` directory
3. create a `.env` file in the `server` directory with the values described below
4. create and start a python venv (use Python version 3.14)
5. build command: `pip install requirements.txt`
6. start command: `python -m uvicorn main:app --reload --port 3000`

.env variables

```
API_KEY="YOUR_GEMINI_API_KEY"
MODEL_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
MODEL=gemini-3.6-flash
PORT=3000
PYTHON_VERSION=3.14
ORIGINS=[""] # modify to add your origin(s) here, for example ORIGINS=["http://localhost:3000"]
WEB_CONCURRENCY=1 
SYSTEM_PROMPT=""
```

You may also use different AI model providers by changing the MODEL_BASE_URL and API_KEY variables.

To run the app with Docker:

1. `cd backend`
2. `docker build .`
3. Create the .env file in the backend directory.
4. `docker run -p 3000:3000  --env-file ./.env <YOUR BUILD ID>`
