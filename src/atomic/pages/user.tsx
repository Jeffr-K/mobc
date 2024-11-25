import React from 'react';

import { useQueryUserHook } from '../../platforms/member/modules/user/api/hooks';

export function UserPage(): React.ReactElement {
  const userId = '673b5b2c7735f48ad5114aba';
  const { data, error, isLoading, refetch } = useQueryUserHook(userId);

  return (
    <div className="p-4">
      <button
        onClick={() => refetch()}
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isLoading ? 'Loading...' : 'Get User'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">Error: {error.message}</div>
      )}

      {data && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {data.data.name}
            </p>
            <p>
              <strong>Email:</strong> {data.data.email}
            </p>
            <p>
              <strong>Age:</strong> {data.data.age}
            </p>
            <p>
              <strong>Phone:</strong> {data.data.phone}
            </p>
            <p>
              <strong>Birth:</strong> {data.data.birth}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Raw Data:</h3>
            <pre className="bg-gray-50 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
