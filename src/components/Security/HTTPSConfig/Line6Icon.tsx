import { memo, SVGProps } from 'react';

const Line6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1149 1.5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1L1149 -6.13385e-08' stroke='#0D597F' strokeWidth={1.5} />
  </svg>
);
const Memo = memo(Line6Icon);
export { Memo as Line6Icon };
