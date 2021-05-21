import * as React from "react";
import './Modal.css';

export const Modal = props => {
    const {isOpen, onClose, modalData} = props;

    if(!isOpen || !modalData){
        return null;
    }

    const mappedData = Object.keys(modalData).map(keyName => {
        let value;

        if (keyName === 'tags') {
            value = modalData[keyName].join(', ')
        } else if (keyName === 'friends') {
            value = modalData[keyName].map(e => e.name).join(', ')
        } else if (typeof modalData[keyName] === 'boolean') {
            value = modalData[keyName].toString()
        } else {
            value = typeof modalData[keyName] === "boolean" ? modalData[keyName].toString() : modalData[keyName]
        }

        return  {
            key: keyName,
            value: value
        }
    });

    return (
        <>
            <div className="Modal-backdrop"/>

            <div className="Modal" onBlur={onClose}>
                <div className="Modal-header">
                    <span className="Modal-close-btn" onClick={onClose} />
                </div>
                <div className="Modal-content">
                    <ul>
                        {mappedData.map((data, i) =>
                            <li key={i} className="Modal-user-field"><span>{data.key}:</span> {data.value}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}