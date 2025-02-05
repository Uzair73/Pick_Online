"use client"
import {Store} from '@/redux/store'
const { Provider } = require("react-redux");


export const My_Provider = ({children}) => {
    return <Provider store={Store}>{children}</Provider>
}
