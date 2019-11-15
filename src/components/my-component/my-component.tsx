import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  observer!: MutationObserver;
  
  connectedCallback() {
    this.observer = new MutationObserver(this.handleChildrenChange);
    this.observer.observe(this.host, { childList: true });
  }

  @Element() host: HTMLElement;
  handleChildrenChange = () => {
    (this.host as any).forceUpdate();
  };

  render() {
    return <div>
      HEADER

      <br/>

      SLOT (
        <slot />
      )

      <br/>
      FOOTER
    </div>;
  }
}
