import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Injectable,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SharedTooltipPositionsEnum } from '../enums/tooltip-positions.enum';

const TOOLTIP_POSITIONS_CONFIG = {
  TOP: <ConnectedPosition>{
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  },
  BOTTOM: <ConnectedPosition>{
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  },
  RIGHT: <ConnectedPosition>{
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
  },
  LEFT: <ConnectedPosition>{
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
  },
};

@Injectable({
  providedIn: 'root',
})
export class SharedTooltipService {
  private renderer: Renderer2;
  constructor(
    private _overlay: Overlay,
    private _rendererFactory: RendererFactory2
  ) {
    this.renderer = _rendererFactory.createRenderer(null, null);
  }

  public openTooltip(
    origin: HTMLElement,
    template: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    width?: number,
    height?: number,
    position?: SharedTooltipPositionsEnum,
    arrowOffsetPercentage?: number,
    onClose?: () => void,
    tooltipClass?: string,
  ): OverlayRef {
    // Create the overlay
    const tooltipOverlayRef = this._overlay.create(
      // Config object as param
      this.getOverlayConfig(
        origin, 
        width, 
        height, 
        position,
        arrowOffsetPercentage,
        tooltipClass
      )
    );

    // Adding the arrow to overlay
    this._appendOverlayArrow(tooltipOverlayRef, arrowOffsetPercentage);

    const tooltipTemplatePortal = new TemplatePortal(
      template,
      viewContainerRef
    );

    // Attach the template to overlay
    tooltipOverlayRef.attach(tooltipTemplatePortal);

    tooltipOverlayRef.backdropClick().subscribe(() => {
      // if we don't have a parametter as a function,
      // don't call that
      if(onClose != undefined) {
        onClose();
      }

      this.closeTooltip(tooltipOverlayRef);
    });

    return tooltipOverlayRef;
  }

  getOverlayConfig(
    origin: HTMLElement,
    width?: number,
    height?: number,
    tooltipPosition?: string,
    arrowOffsetPercentage?: number,
    tooltipClass?: string
  ): OverlayConfig {
    // Get the dimmensions and the position of the origin.
    const originDomRect = origin.getBoundingClientRect();

    const spaceAbove = (originDomRect.top + originDomRect.bottom) / 2;
    const spaceBelow = window.innerHeight - spaceAbove;

    // Set desired position if set or adaptive to top|bottom 
    // based on spaces above and bellow the origin
    let position = tooltipPosition
      ? TOOLTIP_POSITIONS_CONFIG[tooltipPosition]
      : spaceAbove > spaceBelow
      ? TOOLTIP_POSITIONS_CONFIG.TOP
      : TOOLTIP_POSITIONS_CONFIG.BOTTOM;

    let offsetX = 0;
    let offsetY = 0;
    switch (position) {
      case TOOLTIP_POSITIONS_CONFIG.TOP:
        offsetY = -24;
        offsetX = this._getOverlayOffset(width, arrowOffsetPercentage);
        break;
      case TOOLTIP_POSITIONS_CONFIG.BOTTOM:
        offsetY = 24;
        offsetX = this._getOverlayOffset(width, arrowOffsetPercentage);
        break;
      case TOOLTIP_POSITIONS_CONFIG.LEFT:
        offsetX = -24;
        offsetY = this._getOverlayOffset(height, arrowOffsetPercentage);
        break;
      case TOOLTIP_POSITIONS_CONFIG.RIGHT:
        offsetX = 24;
        offsetY = this._getOverlayOffset(height, arrowOffsetPercentage);
        break;
    }

    const overlayConfig = new OverlayConfig({
      width: width,
      height: height,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      hasBackdrop: true,
      panelClass: ['shared-tooltip', tooltipClass],
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(origin)
        .withDefaultOffsetY(offsetY)
        .withDefaultOffsetX(offsetX)
        .withFlexibleDimensions()
        .withLockedPosition()
        .withPositions([position]),
    });

    return overlayConfig;
  }

  private _appendOverlayArrow(
    // Portal Host
    tooltipOverlayRef: OverlayRef,
    arrowOffsetPercentage?: number
  ) {
    // Gets the configuration of the Portal Host(.getConfig)
    let tooltipPosition = (
      tooltipOverlayRef.getConfig()
        .positionStrategy as FlexibleConnectedPositionStrategy
    ).positions[0];
    const arrow: HTMLSpanElement = this.renderer.createElement('span');
    arrow.classList.add('arrow');

    let tooltipHeight = <number>tooltipOverlayRef.getConfig().height;
    let tooltipWidth = <number>tooltipOverlayRef.getConfig().width;

    switch (tooltipPosition) {
      case TOOLTIP_POSITIONS_CONFIG.TOP:
        arrow.classList.add('arrow-bottom');
        arrow.style.left = this._getArrowOffset(
          tooltipWidth,
          arrowOffsetPercentage
        );
        break;
      case TOOLTIP_POSITIONS_CONFIG.BOTTOM:
        arrow.classList.add('arrow-top');
        arrow.style.left = this._getArrowOffset(
          tooltipWidth,
          arrowOffsetPercentage
        );
        break;
      case TOOLTIP_POSITIONS_CONFIG.LEFT:
        arrow.classList.add('arrow-right');
        arrow.style.top = this._getArrowOffset(
          tooltipHeight,
          arrowOffsetPercentage
        );
        break;
      case TOOLTIP_POSITIONS_CONFIG.RIGHT:
        arrow.classList.add('arrow-left');
        arrow.style.top = this._getArrowOffset(
          tooltipHeight,
          arrowOffsetPercentage
        );
        break;
    }
    tooltipOverlayRef.overlayElement.appendChild(arrow);
  }

  private _getOverlayOffset(
    dimension?: number,
    arrowOffsetPercentage?: number
  ): number {
    return arrowOffsetPercentage != null && dimension != null
      ? ((50 - arrowOffsetPercentage) / 100) * dimension
      : 0;
  }

  private _getArrowOffset(
    dimension?: number,
    arrowOffsetPercentage?: number
  ): string {
    return arrowOffsetPercentage != null &&
      dimension != null &&
      arrowOffsetPercentage != 50
      ? `calc(${arrowOffsetPercentage}% + ${
          arrowOffsetPercentage <= 0.21 * dimension ? 1 : -10
        }px)`
      : '50%';
  }

  private closeTooltip(overlayRef: OverlayRef) {
    if (overlayRef && overlayRef.hasAttached()) {
      overlayRef.detach(); // Prevents manipulating the overlay
      overlayRef.dispose(); // Cleans the overlay
    }
  }
}
