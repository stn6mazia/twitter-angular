import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.scss']
})
export class TextAreaFieldComponent {

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
