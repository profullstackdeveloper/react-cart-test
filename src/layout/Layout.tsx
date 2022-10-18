import React from 'react';

interface PropTypes {
    children: any;
}

export default function Layout({ children }: PropTypes): JSX.Element {
    return (
        <div style={{display: 'flex'}}>
            <div style={{ flex: '1 0 auto', paddingTop: '40px', paddingBottom: '40px'}}>
                {
                    children
                }
            </div>
        </div>

    )
}