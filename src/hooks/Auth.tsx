import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

interface LoginProps {
	password: string;
	email: string;
}

interface AuthProps {
	access_token: string;
	me: any;
}

interface AuthProviderProps {
	children: ReactNode;
}

interface AuthContextData {
	user: boolean;
	loginIn: (data: LoginProps) => Promise<void | boolean>;
	signOut(): void;
	createNewAccount: (form: any) => Promise<void | boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	const [data, setData] = useState<AuthProps>({} as AuthProps);

	function signOut() {
		clearAllData();
		setData({} as AuthProps);
	}

	async function clearAllData() {
		const keys = await AsyncStorage.getAllKeys();
		await AsyncStorage.multiRemove(keys);
	}

	async function saveUser({ access_token, me }: AuthProps) {
		await AsyncStorage.multiSet([
			['@CashManager:token', access_token],
			['@CashManager:user', JSON.stringify(me)],
		]);

		setData({ access_token, me });
	}
	async function createNewAccount(form: any): Promise<any> {
		try {
			const account = await api.post('/auth/newaccount', form);
			api.defaults.headers.authorization = `Bearer ${account.data.access_token}`;
			saveUser(account.data);
			return account.data;
		} catch (error) {
			return false;
		}
	}

	async function loginIn(form: LoginProps) {
		try {
			const { data } = await api.post('/auth/login', form);
			api.defaults.headers.authorization = `Bearer ${data.access_token}`;
			saveUser(data);
		} catch (e) {
			return false;
		}
	}

	return (
		<AuthContext.Provider value={{ user: data.me, loginIn, signOut, createNewAccount }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
