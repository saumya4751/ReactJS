import React from 'react'
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (
                <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
            <h1>Hello World!</h1>
        </>
    )
}

export default Content