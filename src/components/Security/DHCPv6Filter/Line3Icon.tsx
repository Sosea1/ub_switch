import { memo, SVGProps } from 'react';

const Line3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1149 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M-0.000307083 1.49988L1149 0.499878' stroke='#0D597F' strokeWidth={1.5} />
  </svg>
);
const Memo = memo(Line3Icon);
export { Memo as Line3Icon };
