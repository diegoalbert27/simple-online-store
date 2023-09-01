import { createContext, useState, useEffect } from 'react'
import Storage from '../services/storage'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        setToken(Storage.get('token'))
        setUser(Storage.get('user'))
    }, [])

    const logout = () => {
        Storage.remove('token')
        Storage.remove('user')

        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            user,
            setUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
