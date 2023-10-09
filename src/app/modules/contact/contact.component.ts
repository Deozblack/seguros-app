import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  private contactService = inject(ContactService);
  public components!:any[];

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(){
    this.contactService.getComponents().subscribe({
      next: (resp)=> {
        this.components = resp;
      }
    })
  }

}
