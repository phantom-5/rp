import React, { useEffect, useState, memo } from "react"
import Card from "../../shared/Card"
import { useCallback } from 'react';

const LiftingState = () => {
    type TEMPDATA = { celsius: number, fahrenheit: number }
    const [tempData, setTempData] = useState<TEMPDATA>()
    const setTempDataOptimised = useCallback((tempData: TEMPDATA) => { setTempData(tempData) }, [])

    console.log('LiftingState','Parent Render Causes New Component Definitions and Basically Forcefully renders them. This wont happen if the components are in separate files. The MergerCmp helps simulate that. The state changes occur inside MergeCmp instead of parent not causing its re-render.')

    const CelsiusInputCmp = ({ tempCelsius, setTempData }: { tempCelsius: number | undefined, setTempData: React.Dispatch<React.SetStateAction<TEMPDATA | undefined>> }) => {
        useEffect(() => {
            console.log('Celsius Rendered')
        }, [])
        return (
            <div>
                Enter Celsius:
                <input type="number" className="form-control" value={tempCelsius} onChange={(e) => { setTempData({ celsius: parseInt(e.target.value), fahrenheit: (parseInt(e.target.value) * (9 / 5) + 32) }) }} />
            </div>
        )
    }
    const FahrenheitInputCmp = ({ tempFahrenheit, setTempData }: { tempFahrenheit: number | undefined, setTempData: (tempData: TEMPDATA) => void }) => {
        useEffect(() => {
            console.log('Fhn Rendered')
        }, [])
        return (
            <div>
                Enter Fahrenheit:
                <input type="number" className="form-control" value={tempFahrenheit} onChange={(e) => { setTempData({ fahrenheit: parseInt(e.target.value), celsius: ((parseInt(e.target.value) - 32) * 5) / 9 }) }} />
            </div>
        )
    }
    const BoildingVerdictCmp = ({ tempData }: { tempData: TEMPDATA | undefined }) => {
        if (tempData?.celsius) {
            return (
                <div>
                    {tempData?.celsius >= 100 ? <div className='lead'>Water will boil.</div> : <div className='lead'>Water will not boil</div>}
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const MergerCmp = () => {
        const [tempData, setTempData] = useState<TEMPDATA>()
        const setTempDataOptimised = useCallback((tempData: TEMPDATA) => { setTempData(tempData) }, [])
        return (
            <>
                <CelsiusInputCmp tempCelsius={tempData?.celsius} setTempData={setTempData} key="input1" />
                <FahrenheitInputCmp tempFahrenheit={tempData?.fahrenheit} setTempData={setTempDataOptimised} key="input2" />
                <BoildingVerdictCmp tempData={tempData} />
            </>
        )
    }

    return (
        <div className="demo-container">
            <Card title="Lifting State Up" subtext="Code Design" description="It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms. Basic principle here is have a single source of truth instead of redundancy." />
            <div className="demo-box">
                <div className="lead text-success">Lifting State Correct</div>
                <MergerCmp />
                <hr/>
                <div className="lead text-danger">Lifting State Incorrect</div>
                <>
                    <CelsiusInputCmp tempCelsius={tempData?.celsius} setTempData={setTempData} key="input1" />
                    <FahrenheitInputCmp tempFahrenheit={tempData?.fahrenheit} setTempData={setTempDataOptimised} key="input2" />
                    <BoildingVerdictCmp tempData={tempData} />
                </>
            </div>
            <div className="demo-box">
                <div className="lead mb-2">What's wrong in incorrect case ?</div>
                <code>Fields lose focus on single button press. Parent Render causes new component definitions and basically forcefully renders them on every re-render because we have defined components within the same file instead of separate files. This wont happen if the components are in separate files. The MergerCmp helps simulate that. The state changes occur inside MergeCmp instead of parent thus not making the parent re-render.</code>
            </div>
        </div>
    )
}

export default LiftingState