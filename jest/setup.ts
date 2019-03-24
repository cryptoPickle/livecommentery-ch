import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import {JSDOM, DOMWindow} from "jsdom";

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src: DOMWindow, target: Global) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

interface Navigator {
  userAgent: string
}
interface Global extends NodeJS.Global{
  window?: DOMWindow,
  document ?: any,
  navigator ?: Navigator,
}

const globalAny: Global = global;

globalAny.window = window;
globalAny.document = window.document;
globalAny.navigator = {
  userAgent: 'node.js',
};
copyProps(window, globalAny);



Enzyme.configure({adapter: new Adapter()});
