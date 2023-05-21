import Link from 'next/link';

export default function Home() {
  const name = 'KWON';

  return (
    <div>
      <div className="wrap">
        <h4 className="title">AppleFresh</h4>
        <p className="sub-title">by dev {name}</p>
      </div>
    </div>
  );
}
