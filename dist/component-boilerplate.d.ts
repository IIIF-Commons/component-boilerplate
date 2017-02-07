// component-boilerplate v1.0.6 https://github.com/viewdir/component-boilerplate#readme

declare namespace MyComponents {
    class ExampleComponent extends _Components.BaseComponent {
        constructor(options: IExampleComponentOptions);
        message(): void;
        protected _init(): boolean;
        data(): Object;
        protected _resize(): void;
    }
}
declare namespace MyComponents.ExampleComponent {
    class Events {
        static MESSAGE: string;
    }
}

declare namespace MyComponents {
    interface IExampleComponentOptions extends _Components.IBaseComponentOptions {
    }
}
