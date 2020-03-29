//from CSS in Next Example
//changed name of css file to include .module in it to see if it does something diff
import styles from "./style.module.css";

function styling(){
    return(
        <div className = {styles.pages} id="pages">
        </div>
    );
}
export default styling; 