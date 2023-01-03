export const fetchData = (delay: number) => {
    return new Promise<string>((resolve,reject)=>{
        let timeout = setTimeout(()=>{
            resolve('Data from API')
            clearTimeout(timeout)
        },delay)
    }
    )
}
