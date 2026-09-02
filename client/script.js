async function askAssistant() {
  await displayWaitingMessage();

  const my_prompt = document.getElementById("user-input").value;

  const body = {
    role: "user",
    content: my_prompt,
  };
  const client = "https://clyde-jbow.onrender.com/ask"; // endpoint from api server
  const response = await fetch(client, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const conversation = await response.json();

  await hideWaitingMessage();
  document.getElementById("user-input").value = "";

  const parentNode = document.getElementById("chat-messages");

  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }

  conversation.forEach((message) => {
    if (message.role == "user" || message.role == "assistant") {
      let messageContainer = document.createElement("div");
      let messageRole = document.createElement("h3");
      let messageContent = document.createElement("p");

      messageContent.id = "message-text";
      messageRole.id = "message-role";

      if (message.role == "assistant") {
        messageContainer.id = "message-bot";
        messageRole.innerText = "Clyde";
      } else if (message.role == "user") {
        messageContainer.id = "message-user";
        messageRole.innerText = "You";
      }

      messageContent.innerText = message.content;

      messageContainer.appendChild(messageRole);
      messageContainer.appendChild(messageContent);
      parentNode.appendChild(messageContainer);
    }
  });
}

function hideWaitingMessage() {
  document.getElementById("awaiting-response-message").className = "display-none";
}

function displayWaitingMessage() {
  document.getElementById("awaiting-response-message").className = "";
}
