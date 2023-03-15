class ButtonCount extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            button {
                background-color: #007BFF;
                color: #fff;
                padding: 8px 16px;
                border-radius: 4px;
            }
        </style>
        <button id="counter"><slot></slot></button>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
        let count = 0;
        let but = shadowRoot.getElementById('counter');
        console.log('hello');

        but.addEventListener('click', ()=>{
            count += 1;
            but.innerHTML=`Times Clicked: ${count}`;
        });

    }
}

customElements.define('button-count', ButtonCount);