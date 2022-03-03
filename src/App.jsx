// Import
import React from "react"
import Button from "./components/Button/Button"
import Functions from "./components/Functions"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import './App.css'

// Generate function
const App = () => {

    const clickHandlerFunction = text => {
        console.log(text)
    }

    console.log("App renderization")
    return (
        <main className="react-calculator">
            <Result value={"0"}/>
            <div className="numbers">
                <Button text="1" clickHandler={clickHandlerFunction} />
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <Functions
                onContentClear={clickHandlerFunction}
                onDelete={clickHandlerFunction}
            />
            <MathOperations
                onClickOperation={operation =>
                    console.log("Operation: ", operation)
                }
                onClickEqual={equal =>
                    console.log("Equal: ", equal)
                }
            />
        </main>
    )
}

// Export
export default App