import React from 'react';

export default function Loading({ error }) {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-800 grid place-content-center'>
      {!error ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="200"
          height="200"
          className="animate-spin-slow"
          style={{ shapeRendering: 'auto', display: 'block' }}
        >
          <g data-idx="1">
            <defs data-idx="2">
              <linearGradient y2="0" y1="1" x2="0" x1="0" id="gradient" data-idx="3">
                <stop style={{ stopColor: '#ffee99' }} offset="0" data-idx="4"></stop>
                <stop style={{ stopOpacity: 0.3, stopColor: '#ffffbb' }} offset="0.5" data-idx="5"></stop>
                <stop style={{ stopOpacity: 0, stopColor: '#ffffff' }} offset="1" data-idx="6"></stop>
              </linearGradient>
              <path
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                id="path"
                data-idx="7"
              ></path>
            </defs>
          </g>
          <g transform="matrix(1,0,0,1,50,50)" data-idx="8">
            <g data-idx="9" transform="matrix(0.3571344448218287,-0.9340529901037757,0.9340529901037757,0.3571344448218287,0,0)">
              <path
                transform="matrix(1,0,0,1,-50,-50)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="11"
              ></path>
              <path
                transform="matrix(0.7071067811865476,0.7071067811865475,-0.7071067811865475,0.7071067811865476,-7.105427357601002e-15,-70.71067811865476)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="12"
              ></path>
              <path
                transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,50,-50)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="13"
              ></path>
              <path
                transform="matrix(-0.7071067811865475,0.7071067811865476,-0.7071067811865476,-0.7071067811865475,70.71067811865476,-7.105427357601002e-15)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="14"
              ></path>
              <path
                transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,50.00000000000001,49.99999999999999)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="15"
              ></path>
              <path
                transform="matrix(-0.7071067811865477,-0.7071067811865474,0.7071067811865474,-0.7071067811865477,1.4210854715202004e-14,70.71067811865476)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="16"
              ></path>
              <path
                transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,-49.99999999999999,50.00000000000001)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="17"
              ></path>
              <path
                transform="matrix(0.7071067811865474,-0.7071067811865477,0.7071067811865477,0.7071067811865474,-70.71067811865476,1.4210854715202004e-14)"
                d="M55.2 30.7l9.7-36.2H35.1l9.7 36.2c1.7-0.4 3.4-0.7 5.2-0.7S53.5 30.3 55.2 30.7z"
                fill="url(#gradient)"
                data-idx="18"
              ></path>
            </g>
          </g>
          <circle r="15" cy="50" cx="50" fill="#ffdd55" data-idx="19"></circle>
          <g data-idx="20"></g>
          <text
            data-watermark="true"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeOpacity="0.1"
            fill="black"
            fillOpacity="0.1"
            stroke="white"
            strokeWidth="1"
            fontSize="5.0"
            x="50"
            y="50"
            data-idx="21"
            style={{ opacity: 1, fontSize: '5px' }}
          ></text>
        </svg>
      ) : (
        <p className='text-white'>{error}</p>
      )}
    </div>
  );
}