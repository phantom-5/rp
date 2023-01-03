import { useState, useEffect } from 'react';
import { fetchData } from './API';

const UseEffect = () => {
    //customHook

    const [counterTrigger, setCounterTrigger] = useState(0)

    const useCounter = (initialValue: number, counterType: 'increasing' | 'decreasing', deps: number) => {
        const [count, setCount] = useState(initialValue)
        useEffect(() => {
            if (deps) {
                counterType === 'increasing' ? setCount(c => c + 1) : setCount(c => c - 1)
            }
        }, [deps, counterType])
        return count
    }

    //increasing counter
    const countIncreasing = useCounter(0, 'increasing', counterTrigger)

    //decreasing counter
    const countDecreasing = useCounter(10, 'decreasing', counterTrigger)

    //fetching Data

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [cleanup, setCleanup] = useState(true)


    useEffect(() => {
        let flag = true
        if (name) {
            // if(flag) //this is wrong
            fetchData(name).then(bio => flag && setBio(bio)) //flag is used inside then not outside so that if cleanup of next state update runs and current fetchData is pending then by the time it solves the instance of 'let flag' its pointing to will be false as a result of which Bio wont be set from the old state update.

        }
        if (cleanup) {
            return () => {
                flag = false
            }
        }
    }, [name, cleanup])

    return (
        <div className="demo-container">
            <div className="demo-box text-center">
                <div className="lead">Custom Hook Example</div>
                <button className="btn btn-sm btn-dark" onClick={() => { setCounterTrigger(c => c + 1) }}>Trigger useCounter</button>
                <div className="lead">{countIncreasing}</div>
                <div className="lead">{countDecreasing}</div>
                <hr />
                <div className="lead">Fetching Data</div>
                <button className="btn btn-sm btn-dark" style={{ marginRight: '4px' }} onClick={() => { setName('Alice') }}>Alice</button>
                <button className="btn btn-sm btn-dark" style={{ marginRight: '4px' }} onClick={() => { setName('Bob') }}>Bob</button>
                <button className="btn btn-sm btn-dark" onClick={() => { setName('Taylor') }}>Taylor</button>
                {bio && <div className="lead">{bio}</div>}<br />
                <button className="btn btn-sm btn-dark mt-2" onClick={() => { setName(''); setBio(''); setCleanup(!cleanup); }}>{cleanup ? 'Remove cleanup' : 'Add cleanup'}</button>
            </div>
        </div>
    )
}

export default UseEffect