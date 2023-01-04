import React, { Component } from 'react';


class Box extends Component {
    state = { 
        num: 0,
     } 

    handleClickLeft=(step)=>{
        this.setState({num: this.state.num-step});
    }
    handleClickRight=(step)=>{
        this.setState({num: this.state.num+step});
    }
    render() { 
        return (
            <React.Fragment>
                <div style={this.getStyle()}>{this.toString()}</div>
                <button onClick={()=>this.handleClickLeft(2)} className="btn btn-outline-success m-3">左移</button>
                <button onClick={()=>this.handleClickRight(3)} className="btn btn-outline-danger m-3">右移</button>
            </React.Fragment>


        );
    }


    getStyle(){
        let styles={
            width: "100px",
            height: "60px",
            backgroundColor: "purple",
            color: "red",
            textAlign: "center",
            lineHeight: "60px",
            borderRadius: "5px",
            marginLeft: this.state.num,
        }

        if(this.state.num===0)
            styles.backgroundColor= "lightblue";
        else if(this.state.num===10)
            styles.backgroundColor= "lightgrey";
        else if(this.state.num===30)
            styles.backgroundColor= "lightyellow";
        return styles; 
    }

    toString(){
        const {num}=this.state;
        return `num: ${num}`;
    }
}
 
export default Box;