import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.00003 15.0212L8.97963 7.33331L0.96017 0.0212587' stroke='#C5C5C5' strokeWidth={2} />
  </svg>
);
const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
