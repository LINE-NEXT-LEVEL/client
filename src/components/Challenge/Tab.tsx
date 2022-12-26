import React, { ReactNode, useCallback } from 'react';
import { useTab } from '../hooks/useTab';

export type TabProps = {
    title: string;
    children: ReactNode;

}

export const Tab = ({title,children}) => {
   const { tab, setTab } = useTab();
   const onTabClick = useCallback(()=>{
    setTab(title);
   },[]);
   console.log(title);
   return <>{tab===title && 
    <div>
        <div onClick={onTabClick}>helloooo.....</div>
        {children}
    </div>
    }</>
}