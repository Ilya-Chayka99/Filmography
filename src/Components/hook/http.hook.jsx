import Cookies from "js-cookie";
export const useHttp = () => {
    const request =async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json',
    'X-API-KEY':'QKCE5YA-NAN4J7Q-NRJ9GA9-M8P2W7P'}) => {
        try {
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            localStorage.setItem("films",JSON.stringify(data.docs))
            return data;
        } catch(e) {
            throw e;
        }
    };
    return {request}
}