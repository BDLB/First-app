import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { Injectable, TemplateRef, ViewContainerRef } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedTooltipService {

  constructor(
    private _overlay: Overlay
  ){ }

  public opentTooltip(
    origin: HTMLElement,
    template: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    width?: number,
    height?: number,
    tooltipClass?: string,
  ): OverlayRef {
    // Create the overlay
    const tooltipOverlayRef =  this._overlay.create(
      // Config object as param
      this.getOverlayConfig(
        width,
        height,
        tooltipClass
      )
    );
    return tooltipOverlayRef;
  }

  getOverlayConfig(
    width?: number,
    height?: number,
    tooltipClass?: string,
  ): OverlayConfig {
    const overlayConfig = new OverlayConfig({
      width: width,
      height: height,
      panelClass: tooltipClass,
      scrollStrategy: this._overlay.scrollStrategies.block(),

    })

    return overlayConfig;
  }
}