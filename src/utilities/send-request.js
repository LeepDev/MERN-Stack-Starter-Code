import { getToken } from "./users-service"

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // this options object is used to include a data payload, set headers, specify the method, etc. 
    const options = { method }
    if (payload){
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }

    const token = getToken();

    if (token) {
        // Need to add an Authorization Header
        // Use the Logical OR Assignment operator
        options.headers ||= {}
        options.headers.Authorization = `Bearer ${token}`
    }

    const res = await fetch(url, options)
    // if res.ok is false, then something went wrong
    if (res.ok) return res.json()
    throw new Error('Bad Request')
  }