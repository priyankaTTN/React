import React from 'react';

export const Counter = (props) => {
        return (
            <div className='counter'>
                <span>{ props.count }</span>
                <button className='btn' onClick={() => props.inCounter()}>+</button>
                <button className='btn' onClick={() => props.decCounter()}>-</button>
            </div>

        );
}
