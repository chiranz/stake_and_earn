import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";
import { triggerToast } from "../src/components/Toast";

export default function Home() {
  return (
    <div className="h-full">
      <NavbarPage />
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto mt-20">
        <h1 className="text-3xl">Stake and Earn CPAY</h1>
        <p className="mt-6">
          A decentralized application for staking and earning protocol tokens.
          Conpay a protocol for day to day contracts
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
