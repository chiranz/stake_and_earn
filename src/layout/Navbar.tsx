import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { getSignerAddress } from "../web3provider";
import { triggerToast } from "../components/Toast";

export const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ethereum, setEthereum] = useState(null);
  const [signerAddress, setSignerAddress] = useState(null);

  async function setSigner() {
    const address = await getSignerAddress();
    setSignerAddress(address);
  }
  useEffect(() => {
    setEthereum((window as any).ethereum);
    setSigner();
  }, [signerAddress]);
  console.log(signerAddress);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleConnect = async () => {
    if (ethereum) {
      await ethereum.request({ method: "eth_requestAccounts" });
      setSigner();

      triggerToast({
        message: "Wallet connected successfully!",
        type: "success",
        position: "topRight",
        duration: 5000,
      });
    }
  };

  return (
    <Navbar bgColor="bg-white" textColor="text-black">
      <Navbar.Brand href="#">
        <svg
          width="25"
          height="25"
          viewBox="0 0 256 417"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            fill="#2298bd"
            d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
          />
          <path
            fill="#0ed7b5"
            d="M127.962 0L0 212.32l127.962 75.639V154.158z"
          />
          <path
            fill="#2298bd"
            d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
          />
          <path fill="#0ed7b5" d="M127.962 416.905v-104.72L0 236.585z" />
          <path
            fill="#1a7e9c"
            d="M127.961 287.958l127.96-75.637-127.96-58.162z"
          />
          <path fill="#2298bd" d="M0 212.32l127.96 75.638v-133.8z" />
        </svg>
      </Navbar.Brand>
      <Navbar.Toggler toggle={toggle} />
      <Navbar.Collapse isOpen={isOpen}>
        <Navbar.Nav position="left">
          <Navbar.Item>
            <Navbar.Link href="#">Stake&Earn</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
        <Navbar.Nav position="right">
          <Navbar.Item>
            {signerAddress ? (
              <Navbar.Link href="#" handleClick={() => {}}>
                {signerAddress}
              </Navbar.Link>
            ) : (
              <Navbar.Link href="#" handleClick={handleConnect}>
                Connect
              </Navbar.Link>
            )}
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

/* Navbar logic */
interface Props {
  children: ReactNode;
}

interface NavbarProps extends Props {
  textColor?: string;
  bgColor?: string;
  className?: string;
}

interface NavbarNavProps extends Props {
  position?: "left" | "center" | "right";
}

interface NavbarCollapseProps extends Props {
  isOpen: boolean;
}

interface NavbarTogglerProps {
  toggle: () => void;
}

interface LinkProps extends Props {
  href: string;
  handleClick?: null | (() => void);
}

const style = {
  header: `shadow py-2 px-4 `,
  navbar: `font-light text-black md:relative md:flex md:items-center md:flex md:flex-row md:justify-start max-w-4xl mx-auto`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
  toggler: `float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
  collapse: {
    default: `md:flex-grow md:items-center md:flex`,
    open: `visible opacity-1 transition-all ease-out duration-500 md:transition-none`,
    close: `invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto`,
  },
  nav: {
    left: `block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0`,
    center: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto `,
    right: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0`,
  },
  link: `block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium`,
};

const Navbar = ({ bgColor, textColor, children }: NavbarProps) => (
  <div className={`${style.header}`}>
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  </div>
);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
Navbar.Brand = ({ children, href }: LinkProps) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

Navbar.Toggler = ({ toggle }: NavbarTogglerProps) => (
  <button
    type="button"
    aria-expanded="false"
    aria-label="Toggle navigation"
    className={style.toggler}
    onClick={toggle}
  >
    &#8801;
  </button>
);

Navbar.Collapse = ({ children, isOpen }: NavbarCollapseProps) => (
  <div
    className={`${isOpen ? style.collapse.open : style.collapse.close} 
    ${style.collapse.default}`}
  >
    {children}
  </div>
);

/*
The navbar nav has three positions
 - left
 - center
 - right
* */
Navbar.Nav = ({ children, position }: NavbarNavProps) => (
  <ul className={style.nav[position]}>{children}</ul>
);

Navbar.Item = ({ children }) => <li>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
Navbar.Link = ({ children, href = "", handleClick = null }: LinkProps) => {
  if (handleClick || href === "") {
    return (
      <button
        onClick={handleClick}
        className={`${style.link} w-40 truncate border rounded-lg `}
      >
        {children}
      </button>
    );
  }
  return (
    <Link href={href}>
      <a className={style.link}>{children}</a>
    </Link>
  );
};

export default Navbar;
