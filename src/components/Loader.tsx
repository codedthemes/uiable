//  ------------------------------ | COMPONENT - LOADER | ------------------------------  //

export default function Loader() {
  return (
    <div className="col-span-full flex min-h-50 w-full items-center justify-center py-12">
      <div className="relative flex size-10 items-center justify-center">
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
  )
}
