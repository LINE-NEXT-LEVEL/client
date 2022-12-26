import {  createContext, useContext } from 'react';

export const TabContext = createContext({tab:'',setTab:null});

export const useTab = () => (useContext(TabContext));