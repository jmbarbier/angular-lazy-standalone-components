import { ApplicationRef, Injector, NgModule, NgModuleFactory, SystemJsNgModuleLoader, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'm1', loadChildren: './module-one/module-one.module#ModuleOneModule'},
  {path: 'm2', loadChildren: './module-two/module-two.module#ModuleTwoModule'},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [SystemJsNgModuleLoader],
})
export class AppModule {
  constructor(private injector: Injector, private moduleLoader: SystemJsNgModuleLoader) {

  }

  ngDoBootstrap(appRef: ApplicationRef) {
    const widgets = document.querySelectorAll('[data-ng-load]');
    for (const i in widgets) {
      if (widgets.hasOwnProperty(i)) {
        const modulePath = widgets[i].getAttribute('data-ng-load');
        if (modulePath) {
          console.log("Loading module", modulePath);
          this.moduleLoader.load(modulePath)
            .then((moduleFactory: NgModuleFactory<any>) => {
              const ngModuleRef = moduleFactory.create(this.injector);
              ngModuleRef.injector.get('components').forEach((components: Type<{}>[]) => {
                components.forEach((component: Type<{}>) => {
                  const factory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(component);
                  const elements = document.getElementsByTagName(factory.selector);
                  if (elements.length > 0) {
                    if (elements.length > 1) {
                      const originalSelector = factory.selector;
                      for (let j = 0; j < elements.length; j++) {
                        elements[j].id = originalSelector + '_' + j;
                        // FIXME: this property is read-only
                        (<any>factory).factory.selector = '#' + elements[j].id;
                        appRef.bootstrap(factory);
                      }
                      (<any>factory).factory.selector = originalSelector;
                    } else {
                      appRef.bootstrap(factory);
                    }
                  }
                });
              });
            });
        }
      }
    }
  }
}
