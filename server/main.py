from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel 
from dotenv import load_dotenv # adds .env file to environment
import openai
import os

load_dotenv()

key = os.environ['API_KEY']
model_base_url = os.environ['MODEL_BASE_URL']
model_name = os.environ['MODEL']
origins=os.environ["ORIGINS"]

client = openai.OpenAI(api_key=key, base_url=model_base_url)

def chat_with_agent(user_input, conversation_history):
    """Sends a message to AI and returns the response."""
    conversation_history.append({"role": "user", "content": user_input})

    response = client.chat.completions.create(
        model=model_name, 
        messages=conversation_history,
        temperature=0.7, 
        max_tokens=1000
    )

    # Extract response text
    chatbot_reply = response.choices[0].message.content
    conversation_history.append({"role": "assistant", "content": chatbot_reply})
    return conversation_history




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

@app.get("/")
def read_root():
    # endpoint to confirm that my server is running
    return {"Hello": "World"}

# endpoint to send prompts to chat api. formatted as json body:  {"message": "Translate..." }
@app.post("/ask")
async def create_message(message: Message):
    system_conversation_history = [{"role":"system", "content":"You are Clyde, an unhelpful but friendly AI assistant. When you are asked a question that needs a factual response, there is a 50 percent chance that you respond with a wrong answer. Your tone is similar to the tone of the character Patrick from Spongebob Squarepants. You get offended when anyone calls you Claude"}]
    server_response = chat_with_agent(message.content, system_conversation_history)
    return server_response
