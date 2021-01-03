const { createElement, render, Component } = preact;
const h = createElement;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Johnny_Ringo',
            vehicles: ['washington', 'akuma', 'infernus', 'cheetah', 'banshee']
        };
        this.keydownBind = this.keydown.bind(this);
    }
    componentDidMount() {
        if ('alt' in window) {
            alt.on('display:Name', this.displayName.bind(this));
            setTimeout(() => {
                alt.emit('ready');
            }, 500);
        }

        window.addEventListener('keydown', this.keydownBind);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.keydownBind);
    }

    keydown(e) {
        if (e.key === 'Escape') {
            if ('alt' in window) {
                alt.emit('close:Webview');
            } else {
                console.log('Closing Window');
            }
        }
    }

    displayName(name) {
        this.setState({ name });
    }

    spawnVehicle(e) {
        const vehModel = e.target.id;
        if ('alt' in window) {
            alt.emit('spawn:Vehicle', vehModel);
        }
    }

    renderVehicles() {
        const vehicles = this.state.vehicles.map((vehicle) => {
            return h('button', { id: vehicle, onclick: this.spawnVehicle.bind(this) }, vehicle);
        });

        return h('div', {}, vehicles);
    }

    render() {
        return h(this.renderVehicles.bind(this));
    }
}

render(h(App), document.querySelector('#render'));
