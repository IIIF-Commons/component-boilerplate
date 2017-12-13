// component-boilerplate v1.0.7 https://github.com/iiif-commons/component-boilerplate#readme
declare var global: any;

/// <reference types="base-component" />
declare namespace IIIFComponents {
    class ExampleComponent extends _Components.BaseComponent {
        constructor(options: _Components.IBaseComponentOptions);
        message(): void;
        protected _init(): boolean;
        private _getMessage();
        data(): Object;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ExampleComponent {
    class Events {
        static MESSAGE: string;
    }
}

declare namespace IIIFComponents {
    interface IExampleComponentData {
    }
}
