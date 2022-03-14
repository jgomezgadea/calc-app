/* eslint no-eval: 0 */

// Import
import React, { useState } from "react"
import words from "lodash.words"
import Functions from "./components/Functions"
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"
import Result from "./components/Result"
import './App.css'

// Generate function
const App = () => {

    // Array Destructuring
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"

    console.log("App renderization")
    return (
        <main className="react-calculator">
            <Result value={value}/>
            <Numbers onClickNumber={number => {
                console.log("Number: ", number)
                // Template literals
                setStack(`${stack}${number}`)
            }} />
            <Functions
                onContentClear={() => {
                    console.log("Clear")
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        console.log("Delete")
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations
                onClickOperation={operation => {
                    console.log("Operation: ", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("Equal: ", equal)
                    setStack(eval(stack).toString())
                }}
            />
        </main>
    )
}

// Export
export default App