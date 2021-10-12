import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit, TemplateRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { SharedDateTimePickerEnum } from 'src/app/shared/enums/datetime-picker.enum';
import { SharedTooltipService } from '../../services/shared-tooltip.service';

@Component({
  selector: 'datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatetimePickerComponent implements OnInit {
  @Input() shownType: SharedDateTimePickerEnum = SharedDateTimePickerEnum.InputCalendar;
  @Input() placeholder: string = "mm/dd/yy mm:hh"
  @Input() dateFormat: string = "MM/dd/yy HH:mm"
  @Input() datetime: Date;
  @Input() enabled: boolean = true;

  private _dateTimeOverlayRef: OverlayRef;

  displayPicker = SharedDateTimePickerEnum;
  dateTimePickerForm: FormGroup;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _tooltipService: SharedTooltipService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dateTimePickerForm = this._formBuilder.group({
      date: [this.datetime],
      time: []
    })
  }

  onSelect(newDate) {
    console.log(newDate)
  }

  openDatePanel (
    tooltipOrigin: MatButton | MatFormField, 
    tooltipPanel: TemplateRef<any>
    // TemplateRef is an instance of a template.
  ): void {
    console.log(tooltipOrigin)
    this._dateTimeOverlayRef = this._tooltipService.opentTooltip(
      tooltipOrigin._elementRef.nativeElement,
      tooltipPanel,
      this._viewContainerRef
    )
    
  }

}
