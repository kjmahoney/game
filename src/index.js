import { init } from 'kontra';

let { canvas } = init('myCanvas');

function component() {
    console.log('hi')
    const element = document.createElement('div');
    element.innerHTML = "hello"
  
    return element;
  }

  component();