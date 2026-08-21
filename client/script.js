async function askAssistant(){

    await displayWaitingMessage();

    const my_prompt = document.getElementById('user-input').value;
    
    const body = {"message": my_prompt}
    const client = " " // endpoint from api server
    
    const response = await fetch( client, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
    const conversation =  await response.json()
    
    console.log(conversation)

    await hideWaitingMessage();

    const parentNode = document.getElementById("chat-messages");

    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);  
    }

    conversation.forEach(message => {
        let messageContainer  = document.createElement('div');
        let messageRole = document.createElement('h3');
        let messageContent = document.createElement('p');

        messageContent.id = "message-text";
        messageRole.id = "message-role";
        
        if (message.role == "agent"){
            messageContainer.id ="message-bot";
        } else if (message.role == "user"){
            messageContainer.id = "message-user";
        }

        messageContainer.appendChild(messageRole);
        messageContainer.appendChild(messageContent);
        parentNode.appendChild(messageContainer);
    })
}

async function hideWaitingMessage (){
    await document.getElementById("awaiting-response-message").style.display="none";
}

async function displayWaitingMessage (){
    await document.getElementById("awaiting-response-message").style.display="";
}


