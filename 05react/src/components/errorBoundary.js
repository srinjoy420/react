import {Component} from "react"

export class ErrorBoundery extends Component{
    constructor(props){
        super(props)
        this.state={hasError :false,message:""};
    }
    static getDerivedStateFromError(error){
        return {hasError :false,message:error.message};
    }

    componentDidCatch(error,info){
        console.error("cought erro",error,info)
    }
    render(){
        if(this.state.hasError){
            <div>
                <h2>somethis is wrong</h2>
                {this.state.message}
            </div>
        }
        return this.props.children;
    }
}