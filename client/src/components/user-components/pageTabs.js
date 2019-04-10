import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import DrinkCard from '../drinkCard/drinkCard'

const UserTabs = (props) => {
  return (
  <Tabs>
    <TabList>
      <Tab>Your Created Drinks</Tab>
      <Tab>Saved Drinks</Tab>
    </TabList>

    <TabPanel>
      <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
      <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
      <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
      <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
    </TabPanel>
    <TabPanel>
    <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
    <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
    <DrinkCard drinkName="Example Name" drinkInfo="Example info" drinkFlavor="Example flavors,Example flavors,Example flavors"/>
    </TabPanel>
  </Tabs>
  )
}

export default UserTabs;