//  ------------------------------ | COMPONENT - LOADER | ------------------------------  //

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-12 w-full min-h-50 col-span-full">
      <div className="relative flex items-center justify-center size-10">
        <span className="custom-loader text-primary"></span>
      </div>
      <style>{`
        .custom-loader {
          width: 8px;
          height: 40px;
          border-radius: 4px;
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: currentColor;
          box-sizing: border-box;
          animation: animloader 0.3s 0.3s linear infinite alternate;
        }

        .custom-loader::after, .custom-loader::before {
          content: '';
          width: 8px;
          height: 40px;
          border-radius: 4px;
          background: currentColor;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 15px;
          box-sizing: border-box;
          animation: animloader 0.3s 0.45s linear infinite alternate;
        }
        .custom-loader::before {
          left: -15px;
          animation-delay: 0s;
        }

        @keyframes animloader {
          0%   { height: 40px } 
          100% { height: 8px }
        }
      `}</style>
    </div>
  );
}
