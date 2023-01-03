import Card from "../../shared/Card"
import { Profiler, useState } from "react"
import { Interaction } from 'scheduler/tracing';

const ProfilerCmp = () => {
    return (
        <Profiler id="profilerA" onRender={(id: string, phase: string, actualDuration: number, baseDurartion: number, startTime:number, commitTime:number, interactions:Set<Interaction>) => 
        { 
            console.log('Profiler',{id, phase, actualDuration, baseDurartion, startTime, commitTime, interactions}) 
            
        }}>
        <div className="demo-container">
            <Card title="Profiler" subtext="Development" description="Analysing performance of each component during development. Important info is given by the following. id. phase. actualDuration. baseDuration. startTime. commitTime. .interactions. For the definitons of these please check : https://reactjs.org/docs/profiler.html "/>
            <div className="demo-box">
                <code>Check for 'profiler' in console</code><br/>
            </div>
        </div>
        </Profiler >
    )
}

export default ProfilerCmp