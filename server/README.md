# Server

To run locally:
1. Clone repository
2. cd into `server` directory
3. create a .env file in the `server` directory with the values described below
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
ORIGINS=[" ", " "] # modify to add your origins here
WEB_CONCURRENCY=1 
```