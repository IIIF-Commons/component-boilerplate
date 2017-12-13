namespace IIIFComponents {
    export class ExampleComponent extends _Components.BaseComponent {

        constructor(options: _Components.IBaseComponentOptions) {
            super(options);
            
            this._init();
            this._resize();
        }

        public message(): void {
            this.fire(ExampleComponent.Events.MESSAGE, this._getMessage());
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }
            
            this._$element.append(this._getMessage());

            return success;
        }

        private _getMessage(): string {
            return `${this.options.data.greeting} ${this.options.data.salutation}`;
        }
        
        public data(): Object {
            return {
                greeting: "Hello",
                salutation: "World"
            };
        }
        
        protected _resize(): void {
            
        }
    }
}

namespace IIIFComponents.ExampleComponent {
    export class Events {
        static MESSAGE: string = 'message';
    }
}

(function(g: any) {
    if (!g.IIIFComponents){
        g.IIIFComponents = IIIFComponents;
    } else {
        g.IIIFComponents.ExampleComponent = IIIFComponents.ExampleComponent;
    }
})(global);