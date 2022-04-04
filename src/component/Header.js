import React, {Component} from 'react'; 
import './Header.css';

class Header extends Component {
        constructor(){
            super()

            this.state={
                title:'My React App',
                keywords:'User Input Here'
            }
        }
        inputChange(event){
            console.log(event.target.value)
            this.setState({keywords:event.target.value})
            this.props.newsSearch(event.target.value)
        }
    render() {  

    return (
            <header>
                
                <center>
                <div className="logo" 
                onClick={()=> console.log("Clicked")}>
                    {this.state.title}</div>      
              <input type="text" onChange={this.inputChange.bind(this)}/>
            
        <p>{this.state.keywords}</p></center>
            <hr/>
            </header>
            
    
    )
}
}
export default Header; 

