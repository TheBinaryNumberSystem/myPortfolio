import Link from "next/link";
import Layout from "./Layout";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="bg-light py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights are Reserved.</span>
        <div className="flex items-center lg:py-2" href="/">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;{" "}
          <Link
            href="https://github.com/TheBinaryNumberSystem"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Abhishek Goswami
          </Link>
        </div>
        <Link
          href="mailto:myselfabhi27@gmail.com"
          className="underline underline-offset-2"
        >
          Contact me
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
