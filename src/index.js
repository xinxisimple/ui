import Button from './packages/button/index.js';
import Message from './packages/message/index.js';

const components = [
    Button,
    Message
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

/* 支持使用 script 标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Button,
    Message
}