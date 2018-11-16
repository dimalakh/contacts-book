import * as React from 'react'

interface IProps {
  color?: string,
  size?: number
}

/* tslint:disable */
export const CancelIcon: React.StatelessComponent <IProps> = ({ color = '#000', size = 0.9 }) => <svg width={size * 15} height={size * 15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill={color} d="M15 0.681731L14.3183 0L7.5 6.81827L0.681731 0L0 0.681731L6.81827 7.5L0 14.3183L0.681731 15L7.5 8.18173L14.3183 15L15 14.3183L8.18173 7.5L15 0.681731Z"/>
</svg>

export const SearchIcon: React.StatelessComponent <IProps> = ({ color = '#000', size = 1 }) => <svg width={size * 15} height={size * 15} viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path fill={color} d='M24.1699 22.7637L18.418 17.0117C19.8438 15.2734 20.7031 13.0469 20.7031 10.6201C20.7031 5.05371 16.1865 0.537109 10.6201 0.537109C5.04883 0.537109 0.537109 5.05371 0.537109 10.6201C0.537109 16.1865 5.04883 20.7031 10.6201 20.7031C13.0469 20.7031 15.2686 19.8486 17.0068 18.4229L22.7588 24.1699C23.1494 24.5605 23.7793 24.5605 24.1699 24.1699C24.5605 23.7842 24.5605 23.1494 24.1699 22.7637ZM10.6201 18.6963C6.16211 18.6963 2.53906 15.0732 2.53906 10.6201C2.53906 6.16699 6.16211 2.53906 10.6201 2.53906C15.0732 2.53906 18.7012 6.16699 18.7012 10.6201C18.7012 15.0732 15.0732 18.6963 10.6201 18.6963Z' />
</svg>

export const AcceptIcon: React.StatelessComponent <IProps> = ({ color = '#000', size = 1 }) => <svg xmlns='http://www.w3.org/2000/svg' width={size * 20} height={size * 20} viewBox='0 0 20 20'>
  <g fill='none' fillRule='evenodd' transform='translate(1 1)'>
    <circle cx='9' cy='9' r='8' fill='none' opacity='.2' />
    <path fill={color} fillRule='nonzero' d='M8.992.667C4.392.667.667 4.4.667 9s3.725 8.333 8.325 8.333c4.608 0 8.341-3.733 8.341-8.333S13.6.667 8.992.667zm.008 15A6.665 6.665 0 0 1 2.333 9 6.665 6.665 0 0 1 9 2.333 6.665 6.665 0 0 1 15.667 9 6.665 6.665 0 0 1 9 15.667z' />
    <path fill={color} fillRule='nonzero' d='M12 6l-4 4-2-2-1 1 3 3 5-5z' />
  </g>
</svg>
