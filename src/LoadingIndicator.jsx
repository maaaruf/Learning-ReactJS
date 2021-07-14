import { Component } from "react";
import './LoadingIndicator.css';

class Loader extends Component {

    // componentDidMount(){
    //     //this.setState({...this.state, loadingIndicator: false});
    //     console.log("Component Mounted (Loading Indicator): " + new Date());
    //   }
    
    //   componentWillUnmount(){
    //     //this.setState({...this.state, loadingIndicator: true});
    //     console.log("componentWillUnmount (Loading Indicator): " + new Date());
    //   }
    
    //   componentDidUpdate(){
    //     console.log("componentDidUpdate (Loading Indicator): " + new Date());
    //   }

    render() {
        return (
            <div class="spinner">
                <div class="spinner-container container1">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container2">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>

            </div>
        );
    }
}

export default Loader;