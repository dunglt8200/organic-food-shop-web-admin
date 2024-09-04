import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loading = ({ loading }) => {
    return (
        <>
            {loading && (
                <div className="loading-container">
                    <HashLoader color="#339933" loading={loading} size={50} />
                </div>
            )}
        </>
    );
};

export default Loading;
