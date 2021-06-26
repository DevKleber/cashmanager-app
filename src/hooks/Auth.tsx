/* eslint-disable camelcase */
import React, { useEffect, createContext, useContext, useState, ReactNode } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

interface LoginProps {
	password: string;
	email: string;
}
interface meProps {
	created_at: string;
	email: string;
	email_verified_at: string;
	id: number;
	is_active: boolean;
	name: string;
	updated_at: string;
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
	me: meProps;
	loginIn: (data: LoginProps) => Promise<void | boolean>;
	signOut(): void;
	createNewAccount: (form: any) => Promise<void | boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
	const [data, setData] = useState<AuthProps>({} as AuthProps);

	useEffect(() => {
		async function getStorage() {
			const getAccess_token = await AsyncStorage.getItem('@CashManager:token');
			const user = await AsyncStorage.getItem('@CashManager:user');

			const token = getAccess_token !== null ? getAccess_token : '';
			const userObjeto = user !== null ? JSON.parse(user) : {};
			if (token !== '') {
				api.defaults.headers.authorization = `Bearer ${token}`;

				setData({ access_token: token, me: userObjeto });
			}
		}
		getStorage();
	}, []);

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
		<AuthContext.Provider value={{ user: data.me, me: data.me, loginIn, signOut, createNewAccount }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
