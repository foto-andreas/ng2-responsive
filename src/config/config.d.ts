import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounce';
import { Observable } from 'rxjs/Rx';
import { ResponsiveWindow } from '../responsive-window';
export declare class ResponsiveConfigInterface {
    breakPoints: {
        xs: {
            max: number;
        };
        sm: {
            min: number;
            max: number;
        };
        md: {
            min: number;
            max: number;
        };
        lg: {
            min: number;
            max: number;
        };
        xl: {
            min: number;
        };
    };
    debounceTime: number;
}
export declare class ResponsiveConfig {
    config: ResponsiveConfigInterface;
    constructor(config?: ResponsiveConfigInterface);
}
export declare class ResponsiveState {
    private _windows;
    private _responsiveConfig;
    elementoObservar: Observable<string>;
    anchoObservar: Observable<number>;
    alturaObservar: Observable<number>;
    browserObserver: Observable<string>;
    pixelObserver: Observable<string>;
    deviceObserver: Observable<any>;
    orientationObserver: Observable<any>;
    standardObserver: Observable<any>;
    ieVersionObserver: Observable<any>;
    userAgentObserver: Observable<any>;
    private _width;
    private _height;
    private _screenWidth;
    private _screenHeight;
    private _orientation;
    private _userAgent;
    private _window;
    private _vendor;
    constructor(responsiveConfig: ResponsiveConfig);
    getWidth(windowName: string): number;
    registerWindow: (rw: ResponsiveWindow) => void;
    unregisterWindow: (rw: ResponsiveWindow) => void;
    private sizeObserver;
    private sizeOperations;
    private browserName;
    private ie_version_detect;
    private pixel_ratio;
    private test_Is_4k();
    private getDevicePixelRatio();
    private device_detection;
    private orientation_device;
    private standard_devices;
    private game_devices;
    private smart_tv;
    private desktop;
    private tablet;
    private mobile;
    private windows;
    private linux;
    private isMobile();
    private isTablet();
    private isSMART();
    private isDesktop();
    private isGameDevice();
    private isWindows();
    private isLinux();
    private isBot();
    userAgent_data: () => any;
    private getUserAgent();
    private getOrientation();
}
