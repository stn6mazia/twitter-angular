import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html'
})
export class TextFieldComponent {
  @Input() fieldName: string = 'blank-input-nane';
  @Input() fieldId?: string;
  @Input() fieldNgModel: string = '';
  @Input() fieldLabel?: string;
  @Input() fieldType!: string;
  @Input() fieldMask?: string;
  @Input() fieldDropMask: boolean = false;
  @Input() fieldHaveMask: any = '';
  @Input() isRequired: boolean = false;
  @Input() isPassword?: boolean = false;
  @Input() showPassword?: boolean

  @Output() value = new EventEmitter<any>();
  

  enviarValor() {
    this.value.emit(this.fieldNgModel)
  }

}
