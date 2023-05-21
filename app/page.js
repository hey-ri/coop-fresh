import Link from 'next/link';

export default function Home() {
  const name = 'KWON';

  return (
    <div>
      <nav>
        <Link href={'/'}>홈</Link>
        <Link href={'/list'}>List</Link>
      </nav>
      <div class="wrap">
        <h4 className="title">AppleFresh</h4>
        <p className="sub-title">by dev {name}</p>
      </div>
    </div>
  );
}
