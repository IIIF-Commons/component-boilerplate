namespace MyComponents {
    export class ExampleComponent extends _Components.BaseComponent {

        constructor(options: IExampleComponentOptions) {
            super(options);
            
            this._init();
            this._resize();
        }

        public message(): void {
            this.fire(ExampleComponent.Events.MESSAGE, this.options.data.message);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }
            
            this._$element.append("I am an example component");

            return success;
        }
        
        public data(): Object {
            return {};
        }
        
        protected _resize(): void {
            
        }
    }
}

namespace MyComponents.ExampleComponent {
    export class Events {
        static MESSAGE: string = 'message';
    }
}

(function(g: any) {
    if (!g.MyComponents){
        g.MyComponents = MyComponents;
    } else {
        g.MyComponents.ExampleComponent = MyComponents.ExampleComponent;
    }
})(global);