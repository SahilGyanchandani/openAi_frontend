import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Message } from '../Models/Messages';
@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {

  constructor(private http: HttpClient) { }

  SendMsg(message: any): Observable<any> {
    const request = {
      model: "gpt-3.5-turbo",
      messages: message.messages
    };
    console.log(request);

    const url = (`https://localhost:7247/api/OpenAiApi/ChatConversation`);
    return this.http.post(url, request);
  }
}
