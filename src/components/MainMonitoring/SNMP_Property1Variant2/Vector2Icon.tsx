import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L7.66667 8L15 0' stroke='white' strokeWidth={2} />
  </svg>
);
const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
