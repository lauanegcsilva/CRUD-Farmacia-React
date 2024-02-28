import {
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-red-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">FarmaVida System </p>
          <p className="text-lg">Desenvolvido por Lauane Gonçalves</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/lauane-goncalves/"
              target="_blank"
            >
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a href="https://github.com/lauanegcsilva" target="_blank">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
