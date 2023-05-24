import React from 'react';
import { AccountInformation } from './AccountInformation';
import { Badges } from './Badges';
import { MyActivity } from './MyActivity';

export const MyAccount = () => {
  return (
    <div>
      <h1>MyAccount</h1>
      <AccountInformation />
      <Badges />
      <MyActivity />
    </div>
  )
}