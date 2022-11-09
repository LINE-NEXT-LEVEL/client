import React, { ReactNode, useCallback, useState } from 'react';

export type ChallengeProps = {
    title: string;
    question: string;
    questionSandbox?: ReactNode;
    solutionSandbox?: ReactNode;
    solution?: string;
}
export const Challenge = ({title,question,questionSandbox,solutionSandbox,solution}:ChallengeProps) => {
    const [showSolution,setShowSolution] = useState<Boolean>(false);
    const onClickSolution = ()=>{
        setShowSolution(!showSolution);
    }
    return (
        <div>
            <strong>{title}</strong>
            <div>{question}</div>
            {questionSandbox}
            <button onClick={onClickSolution}>Solution</button>
            {showSolution && (
                <div>
                    {solutionSandbox}
                    {solution}
                </div>
            )}
        </div>
    )
}