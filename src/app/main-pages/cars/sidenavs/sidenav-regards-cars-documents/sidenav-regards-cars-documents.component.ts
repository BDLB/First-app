import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { RegardCarsDocsService } from 'src/app/shared/services/cars-module-services/regard-cars-docs.service';
import { SharedTooltipService } from 'src/app/shared/services/shared-tooltip.service';

@Component({
  selector: 'app-sidenav-regards-cars-documents',
  templateUrl: './sidenav-regards-cars-documents.component.html',
  styleUrls: ['./sidenav-regards-cars-documents.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavRegardsCarsDocumentsComponent implements OnInit {
  dataInit: boolean = false;
  carsDocumentsOverlayRef: OverlayRef;
  dataSource: any;
  @ViewChild("viewDocumentsActionTooltip")
  private viewDocumentsActionTooltip: TemplateRef<any>;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _sharedTooltipService: SharedTooltipService,
    private _regardCarsDocsService: RegardCarsDocsService
  ) { }

  ngOnInit(): void {
    this._regardCarsDocsService.cardDocsInfo$
    .subscribe((data) => {
      this.dataSource = data.map((item) =>{
        return {
          model: item,
          actions: this.getTableActions()
        }
      })
      this.dataInit = true;
    });
  }

  getTableActions(){
    return {
      edit: [
        {
          label: '',
          svgIcon: 'fas fa-cloud-upload-alt',
          iconClass: 'cloud_icon',
          action: (origin: HTMLElement) => {
            this.openDocsTooltip(
              origin,
              this.viewDocumentsActionTooltip
            ) 
          }
        },
        {
          label: '',
          svgIcon: 'fas fa-times-circle',
          iconClass: 'circle_icon',
          action: () => this.deleteBestQualityDocument()
        }
      ]
    }
  }

  openDocsTooltip(
    tooltipOrigin: HTMLElement,
    tooltipView: TemplateRef<any>
  ) {
    console.log(tooltipView)
    this.carsDocumentsOverlayRef = 
      this._sharedTooltipService.openTooltip(
        tooltipOrigin,
        tooltipView,
        this._viewContainerRef
      )
  }

  deleteBestQualityDocument() {
    console.log('Si asta merge :P')
  }
}
