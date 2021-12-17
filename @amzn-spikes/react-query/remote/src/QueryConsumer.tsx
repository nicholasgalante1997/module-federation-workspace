import React from 'react';
import { useQuery } from 'react-query';

const QueryConsumer = () => {
    // query states
    const { data, isError, isLoading } = useQuery('todos');

    if (isError) return <h2>Query Consumer Error State</h2>;

    if (isLoading) return <h2>Query Consumer Loading Query Data</h2>;

    if (data) console.log('data remote - ' + JSON.stringify(data));

    return (
        <div className="remote-text">Hey Im from the remote!</div>
    );
};

export default QueryConsumer;