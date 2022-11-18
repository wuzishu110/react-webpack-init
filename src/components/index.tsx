import React from 'react';
interface Props {
    label: string;
    onClick: Function;
}

export default function Button(props: Props) {
    const { label, onClick } = props;
    return <button className='m-btn' onClick={() => onClick()}>{label}</button>
}