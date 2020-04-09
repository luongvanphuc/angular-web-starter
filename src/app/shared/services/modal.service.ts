import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
  Inject,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface ModalData {
  childComponentRef: ComponentRef<any>;
  backdropElement: HTMLElement;
  containerElement: HTMLElement;
  resolve?: () => null;
  reject?: () => null;
}

interface ModalConfig {
  // center the modal in the viewport
  centered?: boolean;

  // A custom class to append to the modal window.
  modalClass?: string;

  // click the backdrop to close the modal
  clickOutsideToClose?: boolean;
}

// https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1
@Injectable()
export class ModalService {

  private renderer2: Renderer2;

  // constants
  private modalClass = 'modal';
  private modalBackdropClass = 'modal-backdrop';
  private modalContentClass = 'modal-content';
  private modalOpenClass = 'modal-open';

  // array of modals
  private modalDatas: Array<ModalData> = [];
  private activeModalData: ModalData = null;

  private defaultConfigs: ModalConfig = {
    centered: false,
    modalClass: null,
    clickOutsideToClose: true,
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private rendererFactory: RendererFactory2,
    private applicationRef: ApplicationRef,
    private injector: Injector,

    @Inject(DOCUMENT)
    private document: Document,
  ) {
    this.renderer2 = this.rendererFactory.createRenderer(null, null);
  }

  open(component: any, modalConfigs?: ModalConfig, componentData?: any): {
    componentInstance: any,
    result: Promise<any>,
  } {
    const [backdrop, container, content] = this.attachModalContainers(modalConfigs);
    const componentRef = this.appendComponentTo(content, component, componentData);

    // set body overflow: hidden in css to prevent scroll
    this.renderer2.addClass(this.document.body, this.modalOpenClass);

    // store for destroying later
    let resolve = () => null;
    const result = new Promise(r => resolve = r);
    this.modalDatas.push({
      resolve,
      childComponentRef: componentRef,
      containerElement: container,
      backdropElement: backdrop,
    });
    this.activeModalData = this.modalDatas[this.modalDatas.length - 1];

    return {
      result,
      componentInstance: componentRef.instance,
    };
  }

  close(): ModalData {
    if (!this.activeModalData) {
      return;
    }

    // remove the child component
    this.removeComponent(this.activeModalData.childComponentRef);

    // remove the container and backdrop elements
    this.detachModalContainers();

    // remove the body class
    this.renderer2.removeClass(this.document.body, this.modalOpenClass);

    // remove and replace the active modal data
    const poppedModalData = this.modalDatas.pop();
    if (this.modalDatas.length > 0) {
      this.activeModalData = this.modalDatas[this.modalDatas.length - 1];
    }

    return poppedModalData;
  }

  submit(): ModalData {
    const poppedModalData = this.close();
    poppedModalData.resolve();
    return poppedModalData;
  }

  // this method will create component on runtime, then append it to parent element (query by id)
  private appendComponentTo(container: any, component: any, componentData?: any): ComponentRef<any> {
    // Create a component reference from the component
    const childComponentRef: ComponentRef<any> = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // Attach the data to the child
    if (componentData) {
      this.attachComponentData(componentData, childComponentRef);
    }

    // Attach component to the applicationRef so that it's inside the ng component tree
    this.applicationRef.attachView(childComponentRef.hostView);

    // Get DOM element from component
    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the modal
    this.renderer2.appendChild(container, childDomElem);

    return childComponentRef;
  }

  private removeComponent(componentRef: ComponentRef<any>): void {
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

  private attachComponentData(data: any, componentRef: any): void {
    for (const propKey in data) {
      if (data.hasOwnProperty(propKey)) {
        componentRef.instance[propKey] = data[propKey];
      }
    }
  }

  private attachModalContainers(modalConfigs?: any): [HTMLElement, HTMLElement, HTMLElement] {
    // create backdrop and append to body
    const backdrop = this.createElement('div', this.modalBackdropClass);
    this.renderer2.appendChild(this.document.body, backdrop);

    // create container (modal class)
    const container = this.createElement('div', this.modalClass);

    // create modal content wrapper and append to container
    const modalContent = this.createElement('div', this.modalContentClass);
    this.renderer2.appendChild(container, modalContent);

    // append to body
    this.renderer2.appendChild(this.document.body, container);

    this.setupModalConfig(container, backdrop, modalConfigs);

    // return the container, content and backdrop for quick reference
    return [backdrop, container, modalContent];
  }

  private setupModalConfig(containerElement: HTMLElement, backdropElement: HTMLElement, modalConfigs: any) {
    const configs = {} as ModalConfig;

    for (const propKey in this.defaultConfigs) {
      if (this.defaultConfigs.hasOwnProperty(propKey)) {
        configs[propKey] = modalConfigs && modalConfigs.hasOwnProperty(propKey) ? modalConfigs[propKey] : this.defaultConfigs[propKey];
      }
    }

    // center modal in viewport
    if (configs.centered) {
      // add class and let css do the job
      this.renderer2.addClass(containerElement, 'modal--centered');
    }

    // add custom class to modal element
    if (configs.modalClass) {
      this.renderer2.addClass(containerElement, configs.modalClass);
    }

    // click the backdrop to close modal
    if (configs.clickOutsideToClose) {
      this.renderer2.listen(backdropElement, 'click', () => {
        this.close();
      });
    }
  }

  private detachModalContainers(): void {
    this.activeModalData.containerElement.remove();
    this.activeModalData.backdropElement.remove();
  }

  private createElement(tag: string, className?: string): HTMLElement {
    const element = this.renderer2.createElement(tag);

    if (className) {
      this.renderer2.addClass(element, className);
    }

    return element;
  }
}
