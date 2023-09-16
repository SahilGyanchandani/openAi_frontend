import { Component } from '@angular/core';
import { Message } from 'src/app/Models/Messages';
import { ChatMessageService } from 'src/app/Services/chat-message.service';

@Component({
  selector: 'app-open-ai',
  templateUrl: './open-ai.component.html',
  styleUrls: ['./open-ai.component.css']
})
export class OpenAiComponent {
  userInput: string = '';
  messages: Message[] = [];

  constructor(private chatService: ChatMessageService) { }

  // Function to send a user message
  sendMessage() {
    if (this.userInput.trim() !== '') {
      const userMessage = {
        role: "user",
        content: this.userInput
      };

      // Add the user's message to the conversation
      this.messages.push(userMessage);
      this, this.scrollToBottom();

      // Call the chatService to send the user message to the API, including the previous message
      this.chatService.SendMsg({ messages: this.messages }).subscribe(
        (response: any) => {
          // Handle the chatbot's response and add it to the conversation
          console.log(response);
          const chatbotResponse = response.result; // Adjust this according to your service response

          this.messages.push({ role: "assistant", content: chatbotResponse });
          this.scrollToBottom();
          // Clear the user input field
          this.userInput = '';

          // Scroll to the bottom of the chat box to show the latest messages
          setTimeout(() => {
            const chatBox = document.querySelector('.chat-box');
            if (chatBox !== null) {
              chatBox.scrollTop = chatBox.scrollHeight;
            }
          });

        },
        (error: any) => {
          // Handle error if needed
        }
      );
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const messageContainer = document.querySelector('.chat-box');
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;

      }
    });
  }

}
