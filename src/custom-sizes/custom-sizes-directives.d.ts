import { TemplateRef, ViewContainerRef } from '@angular/core';
import { ResponsiveState, RESPONSIVE_BASE } from '../config';
export declare class ShowItSizes extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState);
    showItSizes: any;
}
export declare class HideItSizes extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState);
    hideItSizes: any;
}
