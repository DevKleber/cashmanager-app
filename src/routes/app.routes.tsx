import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppTab} from './app.tab.routes';

// import {Splash} from '../pages/Splash';
// import {Dashboard} from '../pages/Dashboard';
// import {CreditCardDetail} from '../pages/CreditCard/CreditCardDetail';
// import {CreditCardList} from '../pages/CreditCard';
// import {CreditCardInsert} from '../pages/CreditCard/CreditCardInsert';
// import {PlannedExpenses} from '../pages/PlannedExpenses';
// import {CreditCardUpdate} from '../pages/CreditCard/CreditCardUpdate';
// import {AccountList} from '../pages/Account';
// import {AccountUpdate} from '../pages/Account/AccountUpdate';
// import {AccountInsert} from '../pages/Account/AccountInsert';
// import {AccountDetail} from '../pages/Account/AccountDetail';

const Stack = createStackNavigator();

export default function AppRoutes() {
	return <AppTab />;
}
