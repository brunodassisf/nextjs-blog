import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Site com Headless CMS</div>
      <Link href="/faq">FAQ</Link>
    </div>
  );
}
