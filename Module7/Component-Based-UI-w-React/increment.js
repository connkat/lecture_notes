class LikesComponent {
    constructor() {
        this.likes = 0
    }

    increment() {
        this.likes += 1;
        console.log(this.likes)
    }
}

const component = new LikesComponent();

component.increment()
component.increment()
component.increment()
component.increment()
component.increment()