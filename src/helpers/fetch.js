export const sendContactData = async (url, values) => {
    const config = {
        method: 'POST',
        body: JSON.stringify(values)
    }
    const [response, errorResponse] = await handleAsync(fetch(url,config))
    if(!response) return [response, errorResponse]
    return await handleAsync(response.json())
}

const handleAsync = async (promise) => {
    try{
        const result = await promise
        return [result, null]
    }catch(error){
        return [null, error]
    }
}