import { Toaster } from 'react-hot-toast';

const CustomToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={true}
      gutter={10}
      containerClassName=""
      toastOptions={{
        duration: 2500,
        style: {
          maxWidth: '350px',
          fontSize: '20px',
          background: '#6480dd',
          color: '#ffffff',
        },
      }}
    />
  );
};

export default CustomToaster;
