import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";
import { triggerToast } from "../src/components/Toast";

// TODO: Show user metamask link to install the wallet
// TODO: Ask for user's permission to connect to the wallet if he clicks connect button.
// TODO: Use global context for TOAST message

export default function Home() {
  return (
    <div className="h-screen">
      <NavbarPage />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl">Stake and Earn DAAP</h1>
        <p className="mt-6">
          A decentralized application for staking and earning protocol
        </p>
        <button
          onClick={() =>
            triggerToast({ message: "Something Something", type: "danger" })
          }
        >
          Trigger Toast
        </button>
      </div>
      <Footer />
    </div>
  );
}
