

export const fetchData = (name:string) => {
    return new Promise<string>((resolve,reject)=>{
        let delay: number
        if(name==='Alice'){delay = 2000}
        else if(name==='Bob'){delay = 6000}
        else {delay = 3000}
        let timeout = setTimeout(()=>{
            resolve(`This is ${name}'s Bio`)
            clearTimeout(timeout)
        },delay)
    })
}