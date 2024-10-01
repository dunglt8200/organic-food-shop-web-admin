import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Loading = ({ loading }) => {
    return (
        <>
            {loading && (
                <ScaleLoader color="#cce0e6" loading={loading} size={50} />
            )}
        </>
    );
};

export default Loading;
