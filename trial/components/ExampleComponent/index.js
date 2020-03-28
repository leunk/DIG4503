import styles from './exampleComponent.module.css';

function ExampleComponent(){
    return(
        <div>
            <p className = {styles.example} id="example">This is a different font!</p> 
        </div>
    );
}

export default ExampleComponent;
