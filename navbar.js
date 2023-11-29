
// index.js
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="mobile-nav-bar">
        <div class="test">
            <div class="stick-container">
                <div id="stick1" class="stick"></div>
                <div id="stick2" class="stick" style="position: absolute; top:50%;transform: translate(0,-50%);">
                </div>
                <div class="stick" id="bruh" style="background-color: #F2F2F2;"></div>

                <div id="stick3" class="stick"></div>
            </div>
        </div>

    </div>
    <div class="mobile-nav-bar-contents">
        <a href="https://engixiong.github.io/index.html" style="animation-delay: 0s;"
            class="the-contents">Home</a>
        <a href="https://engixiong.github.io/personal.html" style="animation-delay: 0.25s;" class="the-contents">About</a>
        <a href="https://engixiong.github.io/EngiXiongPaths.html" style="animation-delay: 0.50s;" class="the-contents">EngiXiong Paths</a>
        </div>

    <div class="nav-bar">
        <ul>
            <div class="logo-container">
                <a href="https://engixiong.github.io/index.html"><img draggable="false" class="logo" src="logo.png" alt=""></a>
            </div>
            <div>
                <li>
                    <a class="right" href="https://engixiong.github.io/personal.html">
                        About
                    </a>
                </li>
                <li style="margin-right:1px;margin-left:1px;font-size:clamp(18px, 4vw, 27px);">
                    ┃
                </li>
                <li>
                    <a class="right" id="store" href="EngiXiongPaths.html">
                        Prototype
                    </a>
                </li>
            </div>
        </ul>
    </div>
`;
    }
}

customElements.define('main-header', Header);

