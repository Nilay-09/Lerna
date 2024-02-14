
import snabbdom from 'snabbdom';

export const createApp = () => {
    const patch = snabbdom.init();
    let state = { count: 0 };
    let vnode;

    const updateState = (newState) => {
        state = { ...state, ...newState };
        updateView();
    };

    const updateView = () => {
        const newVNode = render();
        patch(vnode, newVNode);
        vnode = newVNode;
    };

    const render = () => {
        return snabbdom.h('div', [
            snabbdom.h('h1', state.count),
            snabbdom.h('button', { on: { click: () => handleButtonClick() } }, 'Add'),
        ]);
    };

    const handleButtonClick = () => {
        updateState({ count: state.count + 1 });
    };

    vnode = render();
    document.getElementById('app').appendChild(snabbdom.create(vnode));
};

export default createApp;
