import Image from "next/image";
import { GithubLineIcon } from "./components/ui/icons/GithubLineIcon";
import Link from "next/link";
import { FileIcon } from "./components/ui/icons/FileIcon";

export default function Home() {
  return (
    <div className="grid gap-4">
      <div className="rounded-full border-4 border-[#6466F1] w-fit overflow-hidden mx-auto">
        <Image src="https://avatars.githubusercontent.com/u/127414558?s=96&v=4" width={192} height={192} alt="" />
      </div>
      <p className="w-fit mx-auto text-3xl font-bold text-[#703FE8]">岩渕 康也</p>
      <p className="w-fit mx-auto">ジュニアフロントエンドエンジニア</p>
      <p className="text-gray-600">
        株式会社ラクスパートナーズでWebフロントエンドエンジニアやってます。主にReact,
        Next.jsをメインで触っています。アクセシビリティやUI/UXなどに興味があります。
        趣味は筋トレと映画。最近はジャグラーにハマっています。kkoouuyaはハンドルネーム。
      </p>
      <div className="w-fit mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="https://zenn.dev/kkoouuya"
              target="_blank"
              className="flex items-center p-2 rounded-md border gap-2 hover:bg-gray-100 transition duration-300"
            >
              <Image src="/logo-only.svg" alt="zenn" width={24} height={24} />
              Zenn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kkoouuya0730"
              target="_blank"
              className="flex items-center p-2 rounded-md border gap-2 hover:bg-gray-100 transition duration-300"
            >
              <GithubLineIcon />
              Github
            </Link>
          </li>
        </ul>
      </div>
      <p className="w-fit mx-auto">
        <Link
          href="/resume"
          className="flex items-center p-2 rounded-md border gap-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 transition duration-300"
        >
          <FileIcon />
          職務経歴書を見る
        </Link>
      </p>
    </div>
  );
}
