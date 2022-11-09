import React, { ReactNode } from 'react';

export type TabProps = {
    challengeList: Array<string>;
    setIndex: React.Dispatch<React.SetStateAction<number>>;

}

export const Tab = ({titleList,setIndex}) => {
    const onClickTab = ({index}:{index:number}) => {
        setIndex(index+1);
    }
    return (
        <div style={{display:"flex",flexDirection:"row"}} >
            {
            titleList.map((title,index)=>(
                <div onClick={(e) => onClickTab(index)}>{index+1}.{title}</div>
            ))
            }
        </div>
    )

}