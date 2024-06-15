const storeSession = (key, value) => {
    return sessionStorage.setItem(key, value);
}

const lookInSession = (key) => {
    return sessionStorage.getItem(key)
}

const removeFromSession = (key) => {
    return sessionStorage.removeItem(key)
}

const logOutUser = () => {
    sessionStorage.clear();
}

export { storeSession, lookInSession, removeFromSession, logOutUser }