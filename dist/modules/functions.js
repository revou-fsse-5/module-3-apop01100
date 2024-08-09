async function getData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);
        const data = await response.json();
        return data['meals'];
    }
    catch (error) {
        console.log(error.message);
        return error.message;
    }
}
function splitInstructions(text) {
    const results = text === null || text === void 0 ? void 0 : text.split('.');
    return results;
}
export { getData, splitInstructions };
