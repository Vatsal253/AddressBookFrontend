import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
    @Output() addNew = new EventEmitter<void>();
    @Output() editPerson = new EventEmitter<any>();
    @Output() deletePerson = new EventEmitter<number>();
    @Input() personList: any[] = [
        {
            id: 1,
            fullName: 'Vatsal',
            address: 'Ice cream ave',
            city: 'Etawah',
            state: 'Uttar Pradesh',
            zipCode: '206001',
            phoneNumber: '72228017752'
        },
        {
            id: 2,
            fullName: 'Abhinn',
            address: 'F 33, Senior Citizen Home Complex',
            city: 'Greater Noida',
            state: 'Uttar Pradesh',
            zipCode: '201310',
            phoneNumber: '9599733382'
        }
    ];

    // Edit Person
    onEdit(person: any) {
      this.editPerson.emit(person);
  }

  // Delete Person
  onDelete(id: number) {
      this.deletePerson.emit(id);
  }

    // Emit Event for Showing Form
    showForm() {
        this.addNew.emit();
    }
}
