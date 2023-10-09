import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendEmail } from 'src/app/core/interfaces/send-email.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { ContactService } from 'src/app/core/services/contact.service';

interface Service {
  service: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

    public services!: Service[];
    public contacForm!: FormGroup;
    private contactService = inject(ContactService)
    private alertService = inject(AlertService)
    

    ngOnInit() {
        this.services = [
            { service: 'Pólizas de Seguros de Vida Personalizadas'},
            { service: 'Asesoramiento Financiero Personalizado'},
            { service: 'Seguros de Vida para Empresas'},
            { service: 'Atención al Cliente y Soporte Continuo'},
            { service: 'Educación y Recursos'}
        ];

        this.contacForm = new FormGroup(
          {
            name: new FormControl('', [Validators.required, Validators.minLength(4)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl(null, [Validators.required, Validators.minLength(9)]),
            services: new FormControl<Service[] | null >(null, [Validators.required]),
            comments: new FormControl('', [Validators.required]),
          }
        )
    }

    sendEmail(){
      const {name, email, phone, services, comments} = this.contacForm.value;

      if (this.contacForm.invalid) {
        this.contacForm.markAllAsTouched();
        return
      }
      
      const emailData: SendEmail = {
        data:{
          name,
          email,
          phone,
          services: services[0].service,
          comments
        }
      }

      this.contactService.sendEmail(emailData).subscribe({
        next: (resp)=> {
          console.log(resp)
          this.alertService.alertMessage('success', `Nuestro equipo se comunicara pronto conitgo ${resp.data.attributes.name}`)
        },
        error: (err)=> {
          console.log(err)
        }
      })
    }
}
