import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/module/material.module';
import { WebSpeechComponent } from '../../web-speech.component';
import { SpeechRecognizerService } from '../speech-recognizer.service';
import { SpeechSynthesizerService } from '../speech-synthesizer.service';



@NgModule({
  declarations: [WebSpeechComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    SpeechRecognizerService,
    SpeechSynthesizerService
  ]
})
export class WebSpeechModule { }
