class React {
    constructor(){
    this.name = "Servwee";
    this.server = "https://localhost:300";
    
    document.querySelector('button').addEventListener('click', this.handleClick.bind(this))
    
    }

    handleClick(){
        console.log("f");
        console.log(this);
    }
}

new React();