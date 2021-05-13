/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ResponsiveDataGrid {
        "cardtitlebg": string;
        "descriptionfontsize": string;
        "first": string;
        "jsonfilepath": string;
        "maxcolumns": string;
        "titlefontsize": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLResponsiveDataGridElement extends Components.ResponsiveDataGrid, HTMLStencilElement {
    }
    var HTMLResponsiveDataGridElement: {
        prototype: HTMLResponsiveDataGridElement;
        new (): HTMLResponsiveDataGridElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "responsive-data-grid": HTMLResponsiveDataGridElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ResponsiveDataGrid {
        "cardtitlebg"?: string;
        "descriptionfontsize"?: string;
        "first"?: string;
        "jsonfilepath"?: string;
        "maxcolumns"?: string;
        "titlefontsize"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "responsive-data-grid": ResponsiveDataGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "responsive-data-grid": LocalJSX.ResponsiveDataGrid & JSXBase.HTMLAttributes<HTMLResponsiveDataGridElement>;
        }
    }
}
