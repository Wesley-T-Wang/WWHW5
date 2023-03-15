class ButtonCount extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
        button {
            appearance: none;
            backface-visibility: hidden;
            background-color: #27ae60;
            border-radius: 8px;
            border-style: none;
            box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: normal;
            line-height: 1.5;
            outline: none;
            overflow: hidden;
            padding: 13px 20px;
            position: relative;
            text-align: center;
            text-decoration: none;
            transform: translate3d(0, 0, 0);
            transition: all .3s;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: top;
            white-space: nowrap;
          }
          
          button:hover {
            background-color: #1e8449;
            opacity: 1;
            transform: translateY(0);
            transition-duration: .35s;
          }
          
          button:active {
            transform: translateY(2px);
            transition-duration: .35s;
          }
          
          button:hover {
            box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
          }
        </style>
        <button id="counter">Times Clicked: 0</button>
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
