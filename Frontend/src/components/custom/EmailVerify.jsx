import React from 'react';

const EmailVerify = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the email?{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Click here to resend
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify; 