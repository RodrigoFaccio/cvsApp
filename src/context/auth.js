
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        async function loadStorageData() {
           
            const storageUser = await AsyncStorage.getItem('@cvsApp:user');

            if ( storageUser ) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            } else if ( !storageUser) {
                setLoading(false);
            }
        }

        loadStorageData();
    }, [])

    async function signIn(data) {

		console.log(data)
        await AsyncStorage.setItem('@cvsApp:user',JSON.stringify(data));
   
	 if(data ){
		setUser(data);

	 }

    }

    async function signOut() {
		AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !! user, user, signIn, signOut, loading }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;