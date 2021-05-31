import { SLEEP_TIME } from '../actionType'

const setSleepData = (sleepTime) => {
    const createSleepData = localStorage.setItem('sleep', JSON.stringify(sleepTime))
}

const getSleepData = () => {
    return localStorage.getItem('sleep')
}

export const sleepAction = (data) => async (dispatch) => {
    let sleepData = []
    let getData = getSleepData() ? JSON.parse(getSleepData()) : []
    if (getData.length) {
        sleepData = [...getData, data]
    } else {
        sleepData.push(data)
    }
    setSleepData(sleepData)
    dispatch({
        type: SLEEP_TIME,
        sleepData
    })
}