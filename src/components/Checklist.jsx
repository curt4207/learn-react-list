import React from 'react';
import "../../src/Checklist.css"
const Checklist = ({items}) => {
    return (
        <div className='checklist'>
            {items.map((category, index) => (
                <div key={index} className='category'>
                    <h2>{category.title}</h2>
                    <ul>
                        {category.items.map((item, subIndex) => (
                            <li key={subIndex}>
                                <strong >{item.title}: </strong>{item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Checklist;
