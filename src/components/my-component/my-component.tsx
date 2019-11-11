import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  render() {
    return <div>
      HEADER

      <br/>

      SLOT GOES HERE (
        <slot />
      )

      <br/>
      FOOTER
    </div>;
  }
}
