import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
 
  //captcha:boolean;
  validado:boolean=false;
  
  form: FormGroup;

  constructor(private fb: FormBuilder){
    //this.captcha=false;
    this.validado=false;
    this.form =  this.fb.group({
      from_name:[null,Validators.required],
      to_name:'contacto',
      from_email:[null,[Validators.required, Validators.email]],
      message:[null,Validators.required]      
    });
  }
  
  async send(){
    emailjs.init('2j8V76VGjvg6opuke');
    if (this.validado){
      let response = await emailjs.send('service_sr246kh', 'template_ctsix3p',{
        from_name:this.form.value.from_name,
        to_name:this.form.value.to_name,
        from_email:this.form.value.from_email,
        message:this.form.value.message
      });

      alert("El mensaje ha sido enviado.");
      this.form.reset();
      this.validado=false;
      grecaptcha.reset();
    }else{
      alert("Complete los datos");
    }
  }

  resolved(captchaResponse: string){
    //this.captcha=captchaResponse;
    if (captchaResponse!=""){
     this.validado = true;
    }
    else{
      this.validado = false;
    }
  }

  

  ngOninit():void{   

    const options={
      strings: ['simples', 'robustas', 'efectivas'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay:1000,
      showCursor: true,
      cursorChar: '|',
      loop: true
    }    
    const typed = new Typed('.multiple-text', options);    
  }

  
   
}



